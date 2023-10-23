import type { DesignData, IntroduceData, FAQData, UpadteData } from "@/data/dataType"

export const designData: DesignData = {
  purpose: "提升玩家挖掘速度和采集效率，节省生存前期、建筑党游戏时间。",
  details: [
    {
      title: "基本设定",
      contents: [
        '因游戏特性，事实上无法绑定服务器端监听某玩家客户端的按键事件，因此将此模组分为<客户端>和<服务端>两种模式。',
        '你可以按特定键（可修改绑定）来切换是客户端模式还是服务端模式，多人游戏中进行此切换动作仅主机操作有效。',
        '游戏刚开局时默认是服务器模式。',
        '最终效果取决于玩家主手持的镐子、铲子、斧子等工具，向下兼容生效。例如：手持镐子可以同时对石头和泥土生效；手持铲子则仅对泥土生效。',
        '使用品质大于等于钻石的工具进行连锁挖掘每次操作仅消耗1点耐久度，且可正常响应耐久附魔。',
        '连锁挖掘时可以正常响应时运、精准采集等附魔效果。',
      ]
    },
  ],
  extra: ""
}

export const introduceData: IntroduceData = {

  contents: [
    "<客户端>",
    "可以连锁挖掘任何常规方块（容器方块、原版农作物除外）。",
    "按住特定键进入连锁挖掘模式，默认为波浪键（~）。",
    "你可以按照自己的喜好更改触发键。",
    "注意挖掘的最终效果取决于当前的主手持工具，向下兼容，例如镐子可以连锁石头、泥土，铲子只能连锁泥土。",
    "只检测附近等同于此方块的所有方块。",
    "检测单方块连续范围为3x3x3的26格内的方块。",
    "设定单次挖掘方块的数量上限（64个），以防连续方块过多导致的长时间卡顿或者卡死。",
    "挖掘掉的实物会全部掉落在挖掘第一个方块的位置。",
    "完成一次操作会消耗应该消耗的耐久度点数（工具品质小于钻石）（响应耐久附魔）。",
    "如果是钻石装备、下届合金装备或者更高则每次操作只消耗1点耐久。",
    "判断高品质工具的法则定为比较该装备的最大耐久点数，大于1000则认为是高品质装备。",
    "挖掘矿物时时运、精准采集附魔可以正常起作用。",
    "现已加入掘地模式，可一次性向前挖掘1x2x10，3x3x10，5x5x10范围的方块。",
    "掘地模式同样需要按住连锁触发键才能工作。",
    "按切换键切换挖掘模式，同样地，切换键也可以自定义按键绑定。",
    "（掘地模式）工具匹配到镐子的可响应方块：石头、沙砾、安山岩、花岗岩、闪长岩、泥土、草方块、灰化土、砂土、菌丝、沙子、红沙、地狱岩、绯红菌岩、诡异菌岩、末地石。",
    "（掘地模式）工具匹配到镐子以下的可响应方块：沙砾、泥土、草方块、灰化土、砂土、菌丝、沙子、红沙。",
    "创造模式下挖掘是不会掉落任何物品的。",
    " ============================================ ",
    "<服务端>",
    "在潜行模式下（默认shift）可以连锁挖掘任意常规方块（容器方块、原版农作物除外）。",
    "移除掘地模式。",
    "其他条件与客户端均一致。",
    "服主可以在自己的客户端切换此模组当前是什么模式。",
    "如果在服务器中切换本模组为<客户端>模式，则会出现“只有服主按住~所玩家才能进行连锁，且连锁模式也由服主决定”的现象。",
  ]
}

export const updateData: Array<UpadteData> = [
  {
    date: "2022-02-11",
    version: '1.0.0',
    contents: [
      "本次更新为正式版。",
      "新增了掘地模式及其绑定按键。",
      "修复了门这个大类的连锁挖掘时掉落数量错误的问题。",
      "修复了藤蔓连锁不掉落的的问题。",
      "现在创造模式连锁将不会掉落任何物品。",
    ]
  },
  {
    date: "2022-02-19",
    version: '1.0.0+',
    contents: [
      "现在无论哪种挖掘模式，完成一次操作都要消耗工具应该消耗的耐久度点数了（响应耐久附魔）。",
    ]
  },
  {
    date: "2022-03-10",
    version: '1.0.1',
    contents: [
      "修复了使用该物品挖掘之后无法正常堆叠的问题。",
    ]
  },
  {
    date: "2022-05-01",
    version: '1.0.1+',
    contents: [
      "已向上适配至1.18.1。",
    ]
  },
  {
    date: "2022-05-12",
    version: '1.1.0',
    contents: [
      "更新了算法，分离了共用代码。",
      "将模组分为了<服务器端>和<客户端>两种模式供服主切换。",
    ]
  },
  {
    date: "2023-03-31",
    version: '1.2.0',
    contents: [
      "解决了因算法执行覆盖导致的无法“一键砍树”的问题。",
      "向上适配至1.19.2。",
    ]
  },
]
