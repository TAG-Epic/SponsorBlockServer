var db = require('../databases/databases.js').db;

module.exports = function getDaysSavedFormatted (req, res) {
  let row = db.prepare('get', "SELECT SUM((endTime - startTime) / 60 / 60 / 24 * views) as daysSaved from sponsorTimes where shadowHidden != 1", []);
      
  if (row !== undefined) {
      //send this result
      res.send({
          daysSaved: row.daysSaved.toFixed(2)
      });
  }
}
