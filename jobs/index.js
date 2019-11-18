const Request = require('./../lib/request')
const config = require('./../config')
const log = require('./../lib/log')

class Jobs {

  constructor() {

    this.request = new Request({
      channel_id: config.request.channel_id,
      key: config.request.key
    })
    this.domian = config.request.domain

  }

  /**
   * 每日收益结算
   */
  async profitDayJobUpdate() {
    let ret = await this.request(this.domian + '/mall/profit/dayJobProfitClose')
    return ret
  }

  async profitDayJobCreate() {
    let ret = await this.request(this.domian + '/mall/profit/dayJobProfitCreate')
    return ret
  }


}

module.exports = new Jobs