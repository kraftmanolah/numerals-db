const Roman = require('../models/roman.js');

exports.getAllRomans = (req, res, next) => {
  Roman.find( {}, (error, romans) => {
    if (error) next(error);
    req.data = romans;
    next();
  });
};

exports.saveRoman = (req, res,) => {
  let newRoman = new Roman(req.body);

  newRoman.save((error, result) => {
    if (error) res.send(error);
    console.log(result);
  });
};