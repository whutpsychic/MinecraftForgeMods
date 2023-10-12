// ******** 模组信息 ********
export class ModeInfo {
  // ---- 模组名 ----
  name: string;
  // ---- 模组适用范围 ----
  // 双端: double
  // 客户端: client
  // 服务端: server
  range: string;
  // ---- 模组类型 ----
  // 实用型: utility
  // 娱乐型: fun
  // 建造型: creative
  type: string;
  // ---- 模组版本 ----
  version: string;
  // ---- 模组状态 ----
  // 未过审: negative
  // 已上架: for_sale
  // 已弱下架: off_sale
  // 已下架: off_sale_for_all
  // 正在创作: on_edit
  state: string;
  // ---- 支持的游戏版本 ----
  versions: string[];
  // ---- 售价 ----
  price?: number;
  // ---- 销售货币 ----
  // 钻石: diamond
  // 绿宝石: emerald
  priceType?: string;
  // ---- 未过审原因 ----
  reasons?: string;
  // ---- 路由名 ----
  router: string;

  constructor() {
    this.name = "";
    this.range = "";
    this.type = "";
    this.version = "";
    this.state = "";
    this.price = 0;
    this.priceType = "";
    this.versions = [];
    this.reasons = "";
    this.router = "";
  }
}


const modsInfo: Array<ModeInfo> = [
  {
    name: '砍树',
    range: "double",
    type: "utility",
    version: "1.2.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 0,
    router: "/zcut_trees"
  },
  {
    name: '连锁挖掘',
    range: "double",
    type: "utility",
    version: "1.2.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zchain_dig"
  },
  {
    name: '便捷材料',
    range: "double",
    type: "utility",
    version: "1.5.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zeasier_material"
  },
  {
    name: '超凡耐久',
    range: "double",
    type: "utility",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zunbreaking"
  },
  {
    name: '更多装备',
    range: "double",
    type: "utility",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zmore_equipments"
  },
  {
    name: '鸡你太美',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 0,
    router: "/zbeautiful_chicken"
  },
  {
    name: '动态光源',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zdynamic_light"
  },
  {
    name: '快乐农人',
    range: "double",
    type: "fun",
    version: "1.1.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zhappy_farmer"
  },
  {
    name: '铺地板',
    range: "double",
    type: "creative",
    version: "1.0.2",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zflooring"
  },
  {
    name: '斩首大师',
    range: "double",
    type: "fun",
    version: "2.0.1",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zhead_looter"
  },
  {
    name: '暴击',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 0,
    router: "/zcritical_hit"
  },
  {
    name: '王朝武力',
    range: "double",
    type: "fun",
    version: "1.1.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zempaire_military"
  },
  {
    name: '史诗武器',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zepic_weapon"
  },
  {
    name: '更多附魔',
    range: "double",
    type: "fun",
    version: "1.1.0",
    versions: ['1.18.1', '1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zmore_enchants"
  },
  {
    name: '定向附魔',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zdirect_enchant"
  },
  {
    name: '手抄附魔书',
    range: "double",
    type: "fun",
    version: "1.0.1",
    versions: ['1.16.4'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zcopy_enchantedbook"
  },
  {
    name: '合成刷怪蛋',
    range: "double",
    type: "fun",
    version: "1.0.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/zcraft_spawneregg"
  },
  {
    name: '原版刷怪笼',
    range: "double",
    type: "utility",
    version: "1.1.0",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    state: "for_sale",
    price: 300,
    priceType: "diamond",
    router: "/znative_spawner"
  },
  // ============== negative ==============
  {
    name: '死亡不掉落',
    range: "double",
    type: "pleasure",
    version: "1.0.0",
    state: "negative",
    versions: ['1.18.1', '1.16.4', '1.12.2'],
    reasons: "模组内容过于简单。",
    router: "/zkeep_inventory"
  },
];


export default modsInfo;