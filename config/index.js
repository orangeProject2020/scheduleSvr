module.exports = {
  schedules: [{
    rule: '0 0 2 * * *',
    name: 'profitDayJobUpdate',
    title: '结算每日收益'
  }, {
    rule: '0 0 1 * * *',
    name: 'profitDayJobCreate',
    title: '生成每日收益'
  }, {
    rule: '0 30 2 * * *',
    name: 'profitDayJobPlatform',
    title: '每日平台收益结算'
  }],
  request: {
    domain: 'http://127.0.0.1:10000',
    channel_id: '886',
    key: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs'
  }
}