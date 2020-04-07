import { request } from './request'

// 导出商品详情信息
export function getDetailList(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 导出商品类，通过类创建的实例对象就可以获取上面所有的属性(方法)
export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

// 导出商家类
export class Sells {
  constructor(shopInfo, score) {
    this.cSells = shopInfo.cSells
    this.cFans = shopInfo.cFans
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = score
  }
}

// 导出商品参数类
export class Params {
  constructor(info, rule) {
    this.set = info.set
    this.tables = rule.tables[0]
  }
}

// 导出商品评论信息
export function getDetailRate() {
  return request({
    type: 'get',
    url: '/recommend'
  })
}
