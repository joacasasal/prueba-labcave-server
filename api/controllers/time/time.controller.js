var dateFormat = require('dateformat');

/**
 * @description Obtiene el tiempo actual.
 */
exports.getTime = function(req, res) {
    var currentTime = dateFormat(new Date(), "HH:MM:ss");
    console.log('/time: currentTime -> ' + currentTime);

    res.send(currentTime);
};