function findTheDay (days) {
  var date = new Date();
  var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  return new Date(last)
}

module.exports = {findTheDay}