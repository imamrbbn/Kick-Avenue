function calculateDays (dt1, dt2) {
  return Math.floor((
    Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - 
    Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /
    (1000 * 60 * 60 * 24))
}

module.exports = {calculateDays}