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