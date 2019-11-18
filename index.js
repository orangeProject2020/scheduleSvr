const nodeSchedule = require('node-schedule')
const Jobs = require('./jobs')
const schedules = require('./config/').schedules

schedules.forEach(schedule => {
  let jobFunc = Jobs.hasOwnProperty(schedule.name) ? Jobs[schedule.name] : null
  if (jobFunc) {
    nodeSchedule.scheduleJob(schedule.name, jobFunc)
  }

})