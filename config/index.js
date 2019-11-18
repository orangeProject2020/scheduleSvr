module.exports = {
  schedules: [{
    rule: '0 0 2 * * *',
    name: 'profitDayJobUpdate',
    title: '结算每日收益'
  }, {
    rule: '0 0 1 * * *',
    name: 'profitDayJobCreate',
    title: '生成每日收益'
  }],
  request: {
    domain: 'http://127.0.0.1:10000',
    channel_id: '886',
    key: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs'
  }
}