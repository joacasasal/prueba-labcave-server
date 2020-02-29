/**
 * @description Metodos de Time.
 */
module.exports = function(app) {
  var time = require('../controllers/time/time.controller');

  app.route('/time')
    .get(time.getTime);
};