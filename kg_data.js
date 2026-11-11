window.CHAOYIN_KG_DATA = {
  "graph_version": "v0.1",
  "generated_at": "2026-11-11T22:05:24",
  "pilot_county": "汕头市濠江区",
  "metrics": {
    "total_nodes": 108,
    "total_edges_triples": 210,
    "node_types_count": 11,
    "relation_types_count": 14,
    "cross_category_bridges_count": 10,
    "connected_components_count": 1,
    "average_degree": 3.89,
    "node_type_breakdown": {
      "CountyUnit": 1,
      "AccentPoint": 2,
      "NominalItem": 18,
      "Category": 3,
      "Street": 4,
      "SpatialSite": 8,
      "FolkAliasOrTrap": 18,
      "PhoneticFeature": 6,
      "CraftAndMaterial": 24,
      "HeritageLevel": 6,
      "KeyMorpheme": 18
    },
    "relation_type_breakdown": {
      "BELONGS_TO_CATEGORY": 18,
      "ANCHORED_AT_SITE": 18,
      "EXHIBITS_PHONETIC_TRAIT": 21,
      "INVOLVES_CRAFT_MATERIAL": 27,
      "CLASSIFIED_AS_HERITAGE": 18,
      "HAS_F0_CONTOUR_IN_ACCENT": 36,
      "CONTAINS_KEY_MORPHEME": 32,
      "PART_OF_COUNTY": 4,
      "LOCATED_IN_STREET": 8,
      "CALIBRATES_TO_ORTHOGRAPHY": 18,
      "TOOL_SUPPORTS_CRAFT": 3,
      "VILLAGE_SPACE_COUPLED": 2,
      "QIAOPI_CULTURAL_COUPLED": 3,
      "ECOLOGY_GUIDES_LIVELIHOOD": 2
    }
  },
  "node_type_catalog": {
    "CountyUnit": {
      "zh": "试点县域根节点",
      "color": "#0d2b36"
    },
    "Category": {
      "zh": "三大名物门类",
      "color": "#b85d19"
    },
    "Street": {
      "zh": "濠江四街道片区",
      "color": "#1f618d"
    },
    "AccentPoint": {
      "zh": "双腔基频参照点",
      "color": "#0e6251"
    },
    "NominalItem": {
      "zh": "名物数字标本核心词条",
      "color": "#135d66"
    },
    "KeyMorpheme": {
      "zh": "潮语核心本字语素",
      "color": "#6c3483"
    },
    "SpatialSite": {
      "zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1"
    },
    "PhoneticFeature": {
      "zh": "声韵调特征节点",
      "color": "#884ea0"
    },
    "HeritageLevel": {
      "zh": "非遗与文保认定层级",
      "color": "#9c640c"
    },
    "CraftAndMaterial": {
      "zh": "百工技艺与物产载体",
      "color": "#1e8449"
    },
    "FolkAliasOrTrap": {
      "zh": "民间俗称与错字归并",
      "color": "#b03a2e"
    }
  },
  "nodes": [
    {
      "id": "COUNTY-HAOJIANG",
      "label": "汕头市濠江区",
      "node_type": "CountyUnit",
      "node_type_zh": "试点县域根节点",
      "color": "#0d2b36",
      "degree": 4
    },
    {
      "id": "ACC-HAOJIANG",
      "label": "濠江海岛代表腔",
      "node_type": "AccentPoint",
      "node_type_zh": "双腔基频参照点",
      "color": "#0e6251",
      "degree": 18
    },
    {
      "id": "ACC-SHANTOU",
      "label": "汕头市区参照腔",
      "node_type": "AccentPoint",
      "node_type_zh": "双腔基频参照点",
      "color": "#0e6251",
      "degree": 18
    },
    {
      "id": "CY-AF-001",
      "label": "达濠鱼丸",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 14,
      "full_orthography": "达濠鱼丸",
      "pengim": "dah⁸-hô⁵ hî⁵-uân⁵",
      "ipa": "[taʔ˥-hɔ˥ hi˥-uaŋ˥]",
      "category": "农渔饮食风物"
    },
    {
      "id": "CAT-农渔饮食风物",
      "label": "农渔饮食风物",
      "node_type": "Category",
      "node_type_zh": "三大名物门类",
      "color": "#b85d19",
      "degree": 6
    },
    {
      "id": "ST-达濠街道",
      "label": "达濠街道",
      "node_type": "Street",
      "node_type_zh": "濠江四街道片区",
      "color": "#1f618d",
      "degree": 5
    },
    {
      "id": "SITE-达濠古城及渔港片区",
      "label": "达濠古城及渔港片区",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 2,
      "lat": 23.2815,
      "lng": 116.7182
    },
    {
      "id": "ALIAS-CY-AF-001",
      "label": "拍鱼丸 / 那哥鱼丸",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "PH-ENTERING-H",
      "label": "喉塞入声韵尾 (-h / -ʔ)",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 5
    },
    {
      "id": "PH-NASAL-VOWEL",
      "label": "鼻化元音与鼻音韵尾 ([ẽ/ŋ])",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 3
    },
    {
      "id": "CM-NAGE-FISH",
      "label": "本港那哥鱼(蛇鲻)",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CM-HAND-POUND",
      "label": "杉木桶掌力摔打起胶",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 2
    },
    {
      "id": "HL-PROVINCIAL-GI",
      "label": "省级非遗与国家地理标志",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 2
    },
    {
      "id": "CY-AF-002",
      "label": "鱼饭",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 14,
      "full_orthography": "鱼饭",
      "pengim": "hî⁵-bng¹",
      "ipa": "[hi˥˧-mŋ̍˧]",
      "category": "农渔饮食风物"
    },
    {
      "id": "SITE-达濠渔港古墟",
      "label": "达濠渔港古墟",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 3,
      "lat": 23.2785,
      "lng": 116.7138
    },
    {
      "id": "ALIAS-CY-AF-002",
      "label": "冻鱼 / 巴浪鱼饭",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "PH-SYLLABIC-NASAL",
      "label": "成音节鼻音韵 (mng/bng [mŋ̍])",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 3
    },
    {
      "id": "PH-TONE-SANDHI",
      "label": "连读前字变调与文白异读",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 5
    },
    {
      "id": "CM-BALANG-FISH",
      "label": "巴浪鱼与本港海鱼",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CM-BRINE-BOIL",
      "label": "粗海盐猛火水煮摊凉",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 2
    },
    {
      "id": "HL-MARITIME-ORAL",
      "label": "滨海农渔与侨乡口头传统",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 6
    },
    {
      "id": "CY-AF-003",
      "label": "红光杨桃",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "红光杨桃",
      "pengim": "iên⁵-tô⁵",
      "ipa": "[iẽ˥-tɔ˥]",
      "category": "农渔饮食风物"
    },
    {
      "id": "ST-礐石街道",
      "label": "礐石街道",
      "node_type": "Street",
      "node_type_zh": "濠江四街道片区",
      "color": "#1f618d",
      "degree": 3
    },
    {
      "id": "SITE-红光村",
      "label": "红光村",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 3,
      "lat": 23.3362,
      "lng": 116.6791
    },
    {
      "id": "ALIAS-CY-AF-003",
      "label": "五敛子 / 甜杨桃",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-STARFRUIT",
      "label": "礐石山地五棱甜杨桃",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CM-SALT-CURE",
      "label": "盐渍与晒制杨桃干消食",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "HL-VILLAGE-SURVEY",
      "label": "团队实地踏勘村史风物",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 4
    },
    {
      "id": "CY-AF-004",
      "label": "红桃粿",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "红桃粿",
      "pengim": "âng⁵-tô⁵-guê²",
      "ipa": "[aŋ˥-tɔ˥-ɡue˥˧]",
      "category": "农渔饮食风物"
    },
    {
      "id": "ST-马滘街道",
      "label": "马滘街道",
      "node_type": "Street",
      "node_type_zh": "濠江四街道片区",
      "color": "#1f618d",
      "degree": 2
    },
    {
      "id": "SITE-凤岗古村",
      "label": "凤岗古村",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 4,
      "lat": 23.2975,
      "lng": 116.6688
    },
    {
      "id": "ALIAS-CY-AF-004",
      "label": "红曲桃 / 饭粿",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-RED-YEAST-RICE",
      "label": "粳米粉调红曲揉皮",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 2
    },
    {
      "id": "CM-SAVORY-GLUTINOUS",
      "label": "糯米香菇虾米花生馅",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "HL-FOLK-FESTIVAL",
      "label": "潮汕岁时节令食俗遗产",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 3
    },
    {
      "id": "CY-AF-005",
      "label": "蒂头粽",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 10,
      "full_orthography": "蒂头粽",
      "pengim": "di³-tâu⁵-zang³",
      "ipa": "[ti˨˩˧-tʰau˥-tsaŋ˨˩˧]",
      "category": "农渔饮食风物"
    },
    {
      "id": "SITE-达濠古城青篮街",
      "label": "达濠古城青篮街",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 2,
      "lat": 23.2826,
      "lng": 116.7168
    },
    {
      "id": "ALIAS-CY-AF-005",
      "label": "达濠双拼粽球",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-BAMBOO-STEM",
      "label": "竹叶收口保留硬蒂缚粽",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CM-DUAL-FILLING",
      "label": "猪朥豆沙咸甜双拼馅",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-AF-006",
      "label": "鱼册",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 11,
      "full_orthography": "鱼册",
      "pengim": "hî⁵-cêh⁴",
      "ipa": "[hi˥-tsʰeʔ˨]",
      "category": "农渔饮食风物"
    },
    {
      "id": "SITE-达濠古城",
      "label": "达濠古城",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 3,
      "lat": 23.2812,
      "lng": 116.7179
    },
    {
      "id": "ALIAS-CY-AF-006",
      "label": "卷鱼皮册",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-MALLET-SHEET",
      "label": "木槌敲打鱼肉薄如书页",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CM-CELERY-ROLL",
      "label": "卷裹芹菜猪肉丝焯熟",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-CR-001",
      "label": "木粿印",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 14,
      "full_orthography": "木粿印",
      "pengim": "bhêk⁸-guê²-ing³",
      "ipa": "[bak˥-ɡue˥˧-iŋ˨˩˧]",
      "category": "非遗百工器物"
    },
    {
      "id": "CAT-非遗百工器物",
      "label": "非遗百工器物",
      "node_type": "Category",
      "node_type_zh": "三大名物门类",
      "color": "#b85d19",
      "degree": 6
    },
    {
      "id": "SITE-蜈田村",
      "label": "蜈田村",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 4,
      "lat": 23.3216,
      "lng": 116.6648
    },
    {
      "id": "ALIAS-CY-CR-001",
      "label": "红桃印 / 粿模",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "PH-ENTERING-K",
      "label": "塞音入声韵尾 (-k)",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 4
    },
    {
      "id": "PH-VOICED-BH",
      "label": "古浊双唇塞音声母 (bh- [b])",
      "node_type": "PhoneticFeature",
      "node_type_zh": "声韵调特征节点",
      "color": "#884ea0",
      "degree": 1
    },
    {
      "id": "CM-PEAR-WOOD",
      "label": "柯木与梨木反刻雕花",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-CR-002",
      "label": "鱼饭竹篓",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 14,
      "full_orthography": "鱼饭竹篓",
      "pengim": "hî⁵-bng¹ dêk⁴-lou²",
      "ipa": "[hi˥˧-mŋ̍˧ tek˨-lou˥˧]",
      "category": "非遗百工器物"
    },
    {
      "id": "ALIAS-CY-CR-002",
      "label": "巴浪篓 / 盐水篓",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-GREEN-BAMBOO",
      "label": "青竹破篾疏眼编织",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-CR-003",
      "label": "嵌瓷脊饰",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 11,
      "full_orthography": "嵌瓷脊饰",
      "pengim": "kam³-chî⁵ zêh⁴-sêk⁴",
      "ipa": "[kʰam˨˩˧-tsʰi˥ tseʔ˨-sek˨]",
      "category": "非遗百工器物"
    },
    {
      "id": "ALIAS-CY-CR-003",
      "label": "聚饶 / 厝角头饶",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-PORCELAIN-SHARD",
      "label": "手剪彩碗片冷作灰塑嵌贴",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "HL-NATIONAL-ICH",
      "label": "国家级非物质文化遗产",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 1
    },
    {
      "id": "CY-CR-004",
      "label": "石门臼与砖石老门",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "石门臼与砖石老门",
      "pengim": "mng⁵-kiêh⁴-ziêh⁸",
      "ipa": "[mŋ̍˥-kʰieʔ˨-tsieʔ˥]",
      "category": "非遗百工器物"
    },
    {
      "id": "ALIAS-CY-CR-004",
      "label": "门脚石 / 闾门",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-GRANITE-SOCKET",
      "label": "花岗岩门臼与旧砖石闾门",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-CR-005",
      "label": "工夫茶冲罐与泥炉",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 9,
      "full_orthography": "工夫茶冲罐与泥炉",
      "pengim": "dê⁵-pâng⁵ / âng⁵-nî⁵ huê²-lô⁵",
      "ipa": "[te˥-pʰaŋ˥ / aŋ˥-ni˥ hue˥˧-lɔ˥]",
      "category": "非遗百工器物"
    },
    {
      "id": "ST-广澳街道",
      "label": "广澳街道",
      "node_type": "Street",
      "node_type_zh": "濠江四街道片区",
      "color": "#1f618d",
      "degree": 2
    },
    {
      "id": "SITE-东湖社区",
      "label": "东湖社区",
      "node_type": "SpatialSite",
      "node_type_zh": "田野古村与侨博馆坐标",
      "color": "#2e86c1",
      "degree": 5,
      "lat": 23.2576,
      "lng": 116.7598
    },
    {
      "id": "ALIAS-CY-CR-005",
      "label": "茶瓶（孟臣罐）/ 红泥火炉",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-MENGCHEN-POT",
      "label": "孟臣茶瓶关公巡城冲泡",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "HL-UNESCO-WORLD",
      "label": "世界记忆名录与人类非遗",
      "node_type": "HeritageLevel",
      "node_type_zh": "非遗与文保认定层级",
      "color": "#9c640c",
      "degree": 2
    },
    {
      "id": "CY-CR-006",
      "label": "拍鱼丸杉木桶与铁匙",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "拍鱼丸杉木桶与铁匙",
      "pengim": "hî⁵-ziang¹-tang²",
      "ipa": "[hi˥-tsiaŋ˧-tʰaŋ˥˧]",
      "category": "非遗百工器物"
    },
    {
      "id": "ALIAS-CY-CR-006",
      "label": "鱼浆桶 / 刮鱼匙",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-FIR-BARREL",
      "label": "厚壁杉木箍桶隔热控温",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-001",
      "label": "侨批",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "侨批（番批）",
      "pengim": "giâu⁵-puê¹ / huang¹-puê¹",
      "ipa": "[kiau˥-pʰue˧ / huaŋ˧-pʰue˧]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "CAT-侨乡俗谚歌谣",
      "label": "侨乡俗谚歌谣",
      "node_type": "Category",
      "node_type_zh": "三大名物门类",
      "color": "#b85d19",
      "degree": 6
    },
    {
      "id": "ALIAS-CY-PR-001",
      "label": "银信 / 平安批",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-SILVER-LETTER",
      "label": "银信合一侨批汇兑暗码",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-002",
      "label": "家己人",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 10,
      "full_orthography": "家己人",
      "pengim": "ga¹-gī⁷-nâng⁵",
      "ipa": "[ka˧-ki˩-naŋ˥]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "ALIAS-CY-PR-002",
      "label": "误写谐音：胶己人",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-CLAN-MUTUAL",
      "label": "海外潮侨宗亲互助结社",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-003",
      "label": "过番歌谣",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 10,
      "full_orthography": "过番歌谣：暹罗船，水迢迢",
      "pengim": "guê³-huang¹-gô¹",
      "ipa": "[kue˨˩˧-huaŋ˧-kɔ˧]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "ALIAS-CY-PR-003",
      "label": "过番歌 / 番客谣",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-RED-HEAD-JUNK",
      "label": "樟林与广澳红头船下南洋",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-004",
      "label": "力落",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 12,
      "full_orthography": "力落（勤快劳作）",
      "pengim": "lêk⁸-loh⁸",
      "ipa": "[lek˥-loʔ˥]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "ALIAS-CY-PR-004",
      "label": "食力 / 猛力落",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-FISHING-FARMING-ETHIC",
      "label": "耕山讨海勤勉持家家训",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-005",
      "label": "六月大暑吃仙草，帕老母",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 8,
      "full_orthography": "六月大暑吃仙草，帕老母",
      "pengim": "chau²-guê²",
      "ipa": "[tsʰau˥˧-ɡue˥˧]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "ALIAS-CY-PR-005",
      "label": "草粿节气谚语",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-GRASS-JELLY",
      "label": "仙草熬煮凝冻撒红糖粉",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "CY-PR-006",
      "label": "讨海人看流水，耕田人看节气",
      "node_type": "NominalItem",
      "node_type_zh": "名物数字标本核心词条",
      "color": "#135d66",
      "degree": 11,
      "full_orthography": "讨海人看流水，耕田人看节气",
      "pengim": "tô²-hai²-nâng⁵ toi³ lâu⁵-zui²",
      "ipa": "[tʰɔ˥˧-hai˥˧-naŋ˥ tʰoi˨˩˧ lau˥-tsui˥˧]",
      "category": "侨乡俗谚歌谣"
    },
    {
      "id": "ALIAS-CY-PR-006",
      "label": "濠江渔农潮汐谚",
      "node_type": "FolkAliasOrTrap",
      "node_type_zh": "民间俗称与错字归并",
      "color": "#b03a2e",
      "degree": 1
    },
    {
      "id": "CM-TIDAL-CALENDAR",
      "label": "农历初一十五大流水讨海",
      "node_type": "CraftAndMaterial",
      "node_type_zh": "百工技艺与物产载体",
      "color": "#1e8449",
      "degree": 1
    },
    {
      "id": "MOR-PHAH",
      "label": "拍 phah⁴（手掌摔打/捶击）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 3
    },
    {
      "id": "MOR-HI",
      "label": "鱼 hî⁵（本港海鱼统称）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 5
    },
    {
      "id": "MOR-BNG",
      "label": "饭 bng¹（主食白读代称）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 3
    },
    {
      "id": "MOR-GUE",
      "label": "粿 guê²（米制蒸炙糕品）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 3
    },
    {
      "id": "MOR-PAK",
      "label": "缚 pak⁸（古汉语捆扎裹束）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-CEH",
      "label": "册 cêh⁴（古汉语书卷遗存）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-BHEK",
      "label": "木 bhêk⁸（浊双唇塞音木料）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 2
    },
    {
      "id": "MOR-DEK",
      "label": "竹 dêk⁴（短入调竹篾器物）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 2
    },
    {
      "id": "MOR-MNG",
      "label": "门 mng⁵（成音节鼻音聚落门户）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-DE-PANG",
      "label": "茶瓶 dê⁵-pâng⁵（茶壶古雅专名）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-PUE",
      "label": "批 puê¹（跨洋书信银信）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 2
    },
    {
      "id": "MOR-HUANG",
      "label": "番 huang¹（南洋海外场域）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 2
    },
    {
      "id": "MOR-GA-GI",
      "label": "家己 ga¹-gī⁷（自家宗亲本字）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-LEK-LOH",
      "label": "力落 lêk⁸-loh⁸（双阳入勤勉麻利）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-TOI",
      "label": "睇 toi³（古汉语视看正字）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-LAU-ZUI",
      "label": "流水 lâu⁵-zui²（海洋潮汐涨落）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-IEN",
      "label": "杨 iên⁵（文白鼻化果木）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    },
    {
      "id": "MOR-KAM-CHI",
      "label": "嵌瓷 kam³-chî⁵（冷镶剪碗瓷艺）",
      "node_type": "KeyMorpheme",
      "node_type_zh": "潮语核心本字语素",
      "color": "#6c3483",
      "degree": 1
    }
  ],
  "edges": [
    {
      "source": "CY-AF-001",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "SITE-达濠古城及渔港片区",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "PH-ENTERING-H",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "PH-NASAL-VOWEL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "CM-NAGE-FISH",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "CM-HAND-POUND",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "HL-PROVINCIAL-GI",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "MOR-PHAH",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-001",
      "target": "MOR-HI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ST-达濠街道",
      "target": "COUNTY-HAOJIANG",
      "relation": "PART_OF_COUNTY",
      "label": "隶属县区",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-达濠古城及渔港片区",
      "target": "ST-达濠街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-001",
      "target": "CY-AF-001",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "SITE-达濠渔港古墟",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "PH-SYLLABIC-NASAL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "PH-TONE-SANDHI",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "CM-BALANG-FISH",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "CM-BRINE-BOIL",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "MOR-HI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-002",
      "target": "MOR-BNG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-达濠渔港古墟",
      "target": "ST-达濠街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-002",
      "target": "CY-AF-002",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "SITE-红光村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "PH-NASAL-VOWEL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "PH-TONE-SANDHI",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "CM-STARFRUIT",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "CM-SALT-CURE",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "HL-VILLAGE-SURVEY",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-003",
      "target": "MOR-IEN",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ST-礐石街道",
      "target": "COUNTY-HAOJIANG",
      "relation": "PART_OF_COUNTY",
      "label": "隶属县区",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-红光村",
      "target": "ST-礐石街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-003",
      "target": "CY-AF-003",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "SITE-凤岗古村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "PH-TONE-SANDHI",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "CM-RED-YEAST-RICE",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "CM-SAVORY-GLUTINOUS",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "HL-FOLK-FESTIVAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "MOR-BNG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-004",
      "target": "MOR-GUE",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ST-马滘街道",
      "target": "COUNTY-HAOJIANG",
      "relation": "PART_OF_COUNTY",
      "label": "隶属县区",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-凤岗古村",
      "target": "ST-马滘街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-004",
      "target": "CY-AF-004",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "SITE-达濠古城青篮街",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "CM-BAMBOO-STEM",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "CM-DUAL-FILLING",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "HL-FOLK-FESTIVAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "MOR-PAK",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-005",
      "target": "MOR-DEK",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-达濠古城青篮街",
      "target": "ST-达濠街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-005",
      "target": "CY-AF-005",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "CAT-农渔饮食风物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "SITE-达濠古城",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "PH-ENTERING-H",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "CM-MALLET-SHEET",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "CM-CELERY-ROLL",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "HL-FOLK-FESTIVAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "MOR-HI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-AF-006",
      "target": "MOR-CEH",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-达濠古城",
      "target": "ST-达濠街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-AF-006",
      "target": "CY-AF-006",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "SITE-蜈田村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "PH-ENTERING-K",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "PH-VOICED-BH",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "PH-TONE-SANDHI",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "CM-PEAR-WOOD",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "CM-RED-YEAST-RICE",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "HL-VILLAGE-SURVEY",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "MOR-GUE",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "MOR-BHEK",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-001",
      "target": "CY-AF-004",
      "relation": "TOOL_SUPPORTS_CRAFT",
      "label": "雕花木粿印模压红桃粿寿桃吉祥纹样",
      "is_cross_bridge": true
    },
    {
      "source": "SITE-蜈田村",
      "target": "ST-礐石街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-CR-001",
      "target": "CY-CR-001",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "SITE-达濠渔港古墟",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "PH-ENTERING-K",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "PH-SYLLABIC-NASAL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "CM-GREEN-BAMBOO",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "CM-BRINE-BOIL",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "HL-VILLAGE-SURVEY",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "MOR-HI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "MOR-BNG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "MOR-DEK",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-002",
      "target": "CY-AF-002",
      "relation": "TOOL_SUPPORTS_CRAFT",
      "label": "疏眼鱼饭竹篓承担鱼饭猛火透卤与古墟定装计量",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-CR-002",
      "target": "CY-CR-002",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "SITE-凤岗古村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "PH-ENTERING-H",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "PH-ENTERING-K",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "CM-PORCELAIN-SHARD",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "HL-NATIONAL-ICH",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "MOR-KAM-CHI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-003",
      "target": "CY-CR-004",
      "relation": "VILLAGE_SPACE_COUPLED",
      "label": "嵌瓷屋脊与花岗岩石门臼共同构成潮式古村宗祠空间序列",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-CR-003",
      "target": "CY-CR-003",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "SITE-蜈田村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "PH-ENTERING-H",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "PH-SYLLABIC-NASAL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "PH-NASAL-VOWEL",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "CM-GRANITE-SOCKET",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "HL-VILLAGE-SURVEY",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-004",
      "target": "MOR-MNG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-CR-004",
      "target": "CY-CR-004",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "SITE-东湖社区",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "CM-MENGCHEN-POT",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "HL-UNESCO-WORLD",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-005",
      "target": "MOR-DE-PANG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ST-广澳街道",
      "target": "COUNTY-HAOJIANG",
      "relation": "PART_OF_COUNTY",
      "label": "隶属县区",
      "is_cross_bridge": false
    },
    {
      "source": "SITE-东湖社区",
      "target": "ST-广澳街道",
      "relation": "LOCATED_IN_STREET",
      "label": "位于街道",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-CR-005",
      "target": "CY-CR-005",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "CAT-非遗百工器物",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "SITE-达濠古城",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "CM-FIR-BARREL",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "CM-HAND-POUND",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "HL-PROVINCIAL-GI",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "MOR-PHAH",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "MOR-HI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "MOR-BHEK",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-CR-006",
      "target": "CY-AF-001",
      "relation": "TOOL_SUPPORTS_CRAFT",
      "label": "杉木桶与铁刮匙支撑达濠鱼丸掌力摔打起胶",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-CR-006",
      "target": "CY-CR-006",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "SITE-东湖社区",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "CM-SILVER-LETTER",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "HL-UNESCO-WORLD",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "MOR-PUE",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "MOR-HUANG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-001",
      "target": "CY-PR-003",
      "relation": "QIAOPI_CULTURAL_COUPLED",
      "label": "过番歌谣与侨批银信共同记录东湖番客下南洋生命史",
      "is_cross_bridge": true
    },
    {
      "source": "CY-PR-001",
      "target": "CY-CR-005",
      "relation": "QIAOPI_CULTURAL_COUPLED",
      "label": "返乡番客与侨眷以工夫茶冲罐品茗共读平安批",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-PR-001",
      "target": "CY-PR-001",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "SITE-东湖社区",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "CM-CLAN-MUTUAL",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "MOR-PHAH",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "MOR-GA-GI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-002",
      "target": "CY-PR-001",
      "relation": "QIAOPI_CULTURAL_COUPLED",
      "label": "家己人互助熟语构成海外潮侨批信结社信用纽带",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-PR-002",
      "target": "CY-PR-002",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "SITE-东湖社区",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "CM-RED-HEAD-JUNK",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "MOR-PUE",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-003",
      "target": "MOR-HUANG",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-PR-003",
      "target": "CY-PR-003",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "SITE-红光村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "PH-ENTERING-H",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "PH-ENTERING-K",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "PH-TONE-SANDHI",
      "relation": "EXHIBITS_PHONETIC_TRAIT",
      "label": "具音韵特征",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "CM-FISHING-FARMING-ETHIC",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "MOR-LEK-LOH",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-004",
      "target": "CY-AF-003",
      "relation": "VILLAGE_SPACE_COUPLED",
      "label": "红光村猛力落农渔家风滋养山地甜杨桃耕作传统",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-PR-004",
      "target": "CY-PR-004",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "SITE-蜈田村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "CM-GRASS-JELLY",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-005",
      "target": "MOR-GUE",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "ALIAS-CY-PR-005",
      "target": "CY-PR-005",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "CAT-侨乡俗谚歌谣",
      "relation": "BELONGS_TO_CATEGORY",
      "label": "所属门类",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "SITE-凤岗古村",
      "relation": "ANCHORED_AT_SITE",
      "label": "田野空间锚定",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "CM-TIDAL-CALENDAR",
      "relation": "INVOLVES_CRAFT_MATERIAL",
      "label": "关联百工物产",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "HL-MARITIME-ORAL",
      "relation": "CLASSIFIED_AS_HERITAGE",
      "label": "遗产层级归属",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "ACC-HAOJIANG",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备濠江海岛腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "ACC-SHANTOU",
      "relation": "HAS_F0_CONTOUR_IN_ACCENT",
      "label": "具备汕头市区腔F0轨迹",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "MOR-TOI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "MOR-LAU-ZUI",
      "relation": "CONTAINS_KEY_MORPHEME",
      "label": "含核心本字语素",
      "is_cross_bridge": false
    },
    {
      "source": "CY-PR-006",
      "target": "CY-AF-002",
      "relation": "ECOLOGY_GUIDES_LIVELIHOOD",
      "label": "讨海人睇流水潮汐规律指导海船讨海与鱼饭加工",
      "is_cross_bridge": true
    },
    {
      "source": "CY-PR-006",
      "target": "CY-AF-001",
      "relation": "ECOLOGY_GUIDES_LIVELIHOOD",
      "label": "本港潮汐渔汛决定那哥鱼捕捞与鱼丸制作时令",
      "is_cross_bridge": true
    },
    {
      "source": "ALIAS-CY-PR-006",
      "target": "CY-PR-006",
      "relation": "CALIBRATES_TO_ORTHOGRAPHY",
      "label": "俗称/谐音校准归并",
      "is_cross_bridge": false
    }
  ]
};
