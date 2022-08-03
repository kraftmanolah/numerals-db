const mongoose = require('mongoose'),
romanSchema = mongoose.Schema({
    numeral: String,
    value: Number
});

module.exports = mongoose.model('Roman', romanSchema);
