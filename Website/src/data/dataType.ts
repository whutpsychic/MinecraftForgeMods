// 设计模块数据结构
export class DesignData {

  // 主旨
  purpose: string;
  // 详细设计
  details: DesignDetailsData[];
  // 附加文字
  extra?: string;

  constructor() {
    this.purpose = "";
    this.details = [];
    this.extra = "";
  }
}

class DesignDetailsData {

  // 标题
  title: string;
  // 详细设计内容
  contents: string[];

  constructor() {
    this.title = "";
    this.contents = [];
  }
}

// 介绍模块数据结构
export class IntroduceData {
  // 主体内容
  contents: Array<any>;

  constructor() {
    this.contents = [];
  }
}

// FAQ模块数据结构
export class FAQData {
  // 主体内容
  contents: Array<FaqDetail>;

  constructor() {
    this.contents = [];
  }
}

class FaqDetail {
  q: string;
  a: string;

  constructor() {
    this.q = "";
    this.a = "";
  }
}

// 更新记录数据
export class UpadteData {
  // 更新时间
  date: string;
  // 版本号
  version: string;
  // 更新内容
  contents: Array<string>;

  constructor() {
    this.date = "";
    this.version = "";
    this.contents = [];
  }
}











