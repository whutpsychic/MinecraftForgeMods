// 根据预定义的字段渲染文字
// 浅比较
export const renderCellTextByOptions = (target: any, dictionary: any[]) => {
  let result = "???"
  dictionary.forEach((dict) => {
    if (dict.name === target) {
      result = dict.discription
    }
  })
  return result
}

// 根据字典查找颜色样式
export const getColorFromDictionary = (target: any, dictionary: any[]) => {
  let result = undefined
  dictionary.forEach((dict) => {
    if (dict.name === target) {
      result = dict.color
    }
  })
  return result
}