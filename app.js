/* 潮音博物 · 共用脚本
 * 词条数据来自 seed_data.js（由 scripts/02_build_prototype_and_figures.py 生成），本文件只负责排版与示意音。
 */
(function () {
  "use strict";

  var D = window.CHAOYIN_DATA || {};
  var items = D.seedItems || [];
  var facts = D.verifiedFacts || {};

  var CN = "零一二三四五六七八九";
  function cnNum(n) {
    if (n < 10) return CN[n];
    if (n < 20) return "十" + (n % 10 ? CN[n % 10] : "");
    var t = Math.floor(n / 10), o = n % 10;
    return CN[t] + "十" + (o ? CN[o] : "");
  }

  function shortName(w) {
    var s = w.split("：")[0].split("（")[0];
    if (s.length > 8) s = s.split("，")[0];
    return s;
  }

  function catShort(c) {
    if (c.indexOf("农渔") !== -1) return "农渔饮食";
    if (c.indexOf("百工") !== -1) return "非遗百工";
    return "侨乡俗谚";
  }

  var CAT_ORDER = ["农渔饮食风物", "非遗百工器物", "侨乡俗谚歌谣"];

  var SITES = [
    { key: "红光村", name: "红光村", street: "礐石街道" },
    { key: "蜈田村", name: "蜈田村", street: "礐石街道" },
    { key: "凤岗", name: "凤岗古村", street: "马滘街道" },
    { key: "达濠", name: "达濠古城", street: "达濠街道" },
    { key: "东湖", name: "东湖侨村", street: "广澳街道", labelLeft: true }
  ];

  function siteOf(it) {
    for (var i = 0; i < SITES.length; i++) {
      if (it.site_village.indexOf(SITES[i].key) !== -1) return SITES[i];
    }
    return null;
  }

  // 点位坐标取该地所有词条实测经纬度的平均值
  SITES.forEach(function (s) {
    var pts = items.filter(function (it) { return siteOf(it) === s; });
    s.count = pts.length;
    s.lat = pts.reduce(function (a, b) { return a + b.lat; }, 0) / Math.max(1, pts.length);
    s.lng = pts.reduce(function (a, b) { return a + b.lng; }, 0) / Math.max(1, pts.length);
  });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function villageShort(v) { return v.split("（")[0]; }

  // 原始归一化音高值换算为五度（18 约为一度，55 约为五度）
  function toDeg(v) { return Math.max(1, Math.min(5, 1 + ((v - 18) / 37) * 4)); }

  function smoothPath(pts) {
    if (pts.length < 2) return "";
    var d = "M" + pts[0].x.toFixed(1) + "," + pts[0].y.toFixed(1);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i === 0 ? i : i - 1], p1 = pts[i], p2 = pts[i + 1];
      var p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
      var c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
      var c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
      d += " C" + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) +
        " " + p2.x.toFixed(1) + "," + p2.y.toFixed(1);
    }
    return d;
  }

  function drawTone(svg, it, opt) {
    var o = Object.assign({ w: 600, h: 168, padL: 24, padR: 46, padT: 14, padB: 12, font: 11 }, opt || {});
    var pw = o.w - o.padL - o.padR, ph = o.h - o.padT - o.padB;
    function Y(d) { return o.padT + ph - ((d - 1) / 4) * ph; }
    function X(i, n) { return o.padL + (n <= 1 ? 0 : (i / (n - 1)) * pw); }

    var g = "";
    for (var d = 1; d <= 5; d++) {
      var edge = d === 1 || d === 5;
      g += '<line x1="' + o.padL + '" x2="' + (o.padL + pw) + '" y1="' + Y(d).toFixed(1) + '" y2="' + Y(d).toFixed(1) +
        '" stroke="rgba(22,20,15,' + (edge ? 0.28 : 0.1) + ')" stroke-width="1"/>';
      g += '<text x="' + (o.padL - 9) + '" y="' + (Y(d) + 4).toFixed(1) + '" text-anchor="end" font-size="' + o.font +
        '" fill="#8a857a" font-family="Georgia, serif">' + d + "</text>";
    }

    var hj = it.f0_contour_haojiang.map(function (v, i, a) { return { x: X(i, a.length), y: Y(toDeg(v)) }; });
    var st = it.f0_contour_shantou.map(function (v, i, a) { return { x: X(i, a.length), y: Y(toDeg(v)) }; });

    // 线尾直接标注，代替图例
    var a = st[st.length - 1].y, b = hj[hj.length - 1].y, ys, yh;
    if (a <= b) { ys = a - 3; yh = Math.max(b + 12, ys + 14); }
    else { yh = b - 3; ys = Math.max(a + 12, yh + 14); }
    var lo = o.padT + 6, hi = o.h - 2;
    ys = Math.min(hi, Math.max(lo, ys)); yh = Math.min(hi, Math.max(lo, yh));
    var lx = o.padL + pw + 7;

    svg.setAttribute("viewBox", "0 0 " + o.w + " " + o.h);
    svg.innerHTML = g +
      '<path d="' + smoothPath(st) + '" fill="none" stroke="#8a857a" stroke-width="1.3" stroke-dasharray="4 3"/>' +
      '<path d="' + smoothPath(hj) + '" fill="none" stroke="#a8321d" stroke-width="2" stroke-linecap="round"/>' +
      '<text x="' + lx + '" y="' + yh.toFixed(1) + '" font-size="' + o.font + '" fill="#a8321d" font-family="sans-serif">濠江</text>' +
      '<text x="' + lx + '" y="' + ys.toFixed(1) + '" font-size="' + o.font + '" fill="#8a857a" font-family="sans-serif">市区</text>' +
      '<line class="playhead" x1="' + o.padL + '" x2="' + o.padL + '" y1="' + o.padT + '" y2="' + (o.padT + ph) +
      '" stroke="#16140f" stroke-width="1" style="visibility:hidden"/>';
    svg._tone = { x0: o.padL, x1: o.padL + pw };
  }

  var actx = null, raf = 0;
  function playTone(svg, seq, baseHz, color) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    actx = actx || new AC();
    if (actx.state === "suspended") actx.resume();
    var ctx = actx, now = ctx.currentTime, dur = Math.max(0.8, seq.length * 0.14);

    var lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(1500, now);
    var o1 = ctx.createOscillator(), o2 = ctx.createOscillator();
    var g1 = ctx.createGain(), g2 = ctx.createGain(), m = ctx.createGain();
    o1.type = "triangle"; o2.type = "sine";
    seq.forEach(function (v, i) {
      var t = now + (i / Math.max(1, seq.length - 1)) * dur;
      var hz = baseHz * Math.pow(2, (toDeg(v) - 3) * 0.18);
      if (i === 0) { o1.frequency.setValueAtTime(hz, t); o2.frequency.setValueAtTime(hz * 2, t); }
      else { o1.frequency.linearRampToValueAtTime(hz, t); o2.frequency.linearRampToValueAtTime(hz * 2, t); }
    });
    g1.gain.value = 0.85; g2.gain.value = 0.14;
    m.gain.setValueAtTime(0.0001, now);
    m.gain.linearRampToValueAtTime(0.2, now + 0.05);
    m.gain.setValueAtTime(0.18, now + dur - 0.08);
    m.gain.exponentialRampToValueAtTime(0.0001, now + dur + 0.04);
    o1.connect(g1); o2.connect(g2); g1.connect(lp); g2.connect(lp); lp.connect(m); m.connect(ctx.destination);
    o1.start(now); o2.start(now); o1.stop(now + dur + 0.06); o2.stop(now + dur + 0.06);

    var line = svg && svg.querySelector(".playhead"), meta = svg && svg._tone;
    cancelAnimationFrame(raf);
    if (line && meta) {
      line.setAttribute("stroke", color || "#16140f");
      line.style.visibility = "visible";
      var t0 = performance.now();
      var step = function (t) {
        var p = Math.min(1, (t - t0) / (dur * 1000));
        var x = meta.x0 + p * (meta.x1 - meta.x0);
        line.setAttribute("x1", x.toFixed(1));
        line.setAttribute("x2", x.toFixed(1));
        if (p < 1) raf = requestAnimationFrame(step);
        else line.style.visibility = "hidden";
      };
      raf = requestAnimationFrame(step);
    }
    return true;
  }

  // 点位示意图：按实测经纬度落点，配经纬网格，不画海岸线
  function drawLocator(svg, it) {
    var lng0 = 116.645, lng1 = 116.775, lat0 = 23.248, lat1 = 23.348;
    var k = Math.cos((23.3 * Math.PI) / 180);
    var w = 220, padX = 10, padTop = 10, padBot = 18;
    var s = (w - padX * 2) / ((lng1 - lng0) * k);
    var h = Math.round(padTop + (lat1 - lat0) * s + padBot);
    function X(lng) { return padX + (lng - lng0) * k * s; }
    function Y(lat) { return padTop + (lat1 - lat) * s; }
    var cur = siteOf(it);

    var g = "";
    [116.66, 116.7, 116.74].forEach(function (v) {
      g += '<line x1="' + X(v).toFixed(1) + '" x2="' + X(v).toFixed(1) + '" y1="' + padTop + '" y2="' + (h - padBot) +
        '" stroke="rgba(22,20,15,0.08)"/>';
      g += '<text x="' + X(v).toFixed(1) + '" y="' + (h - 5) + '" text-anchor="middle" font-size="8.5" fill="#8a857a" font-family="Georgia, serif">' +
        v.toFixed(2) + "°E</text>";
    });
    [23.26, 23.3, 23.34].forEach(function (v) {
      g += '<line x1="' + padX + '" x2="' + (w - padX) + '" y1="' + Y(v).toFixed(1) + '" y2="' + Y(v).toFixed(1) +
        '" stroke="rgba(22,20,15,0.08)"/>';
      g += '<text x="' + (padX + 1) + '" y="' + (Y(v) - 3).toFixed(1) + '" font-size="8.5" fill="#8a857a" font-family="Georgia, serif">' +
        v.toFixed(2) + "°N</text>";
    });
    g += '<rect x="' + padX + '" y="' + padTop + '" width="' + (w - padX * 2) + '" height="' + (h - padTop - padBot) +
      '" fill="none" stroke="rgba(22,20,15,0.3)"/>';
    g += '<text x="' + (w - padX - 4) + '" y="' + (padTop + 13) + '" text-anchor="end" font-size="10" fill="#48443c" font-family="sans-serif">北↑</text>';

    SITES.forEach(function (st) {
      var on = st === cur, x = X(st.lng), y = Y(st.lat);
      g += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (on ? 4.2 : 3) + '" fill="' +
        (on ? "#a8321d" : "#fbfaf6") + '" stroke="' + (on ? "#a8321d" : "#16140f") + '" stroke-width="1"/>';
      var tx = st.labelLeft ? x - 7 : x + 7;
      g += '<text x="' + tx.toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="' + (st.labelLeft ? "end" : "start") +
        '" font-size="10" font-family="sans-serif" fill="' + (on ? "#a8321d" : "#48443c") + '"' +
        (on ? ' font-weight="700"' : "") + ">" + st.name + "</text>";
    });

    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.innerHTML = g;
  }

  window.CY = {
    data: D,
    items: items,
    facts: facts,
    cnNum: cnNum,
    shortName: shortName,
    catShort: catShort,
    CAT_ORDER: CAT_ORDER,
    SITES: SITES,
    siteOf: siteOf,
    esc: esc,
    villageShort: villageShort,
    drawTone: drawTone,
    playTone: playTone,
    drawLocator: drawLocator
  };
})();
