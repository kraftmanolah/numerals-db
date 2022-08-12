const mongoose = require('mongoose'),
uniqueValidator = require('mongoose-unique-validator'),
romanSchema = mongoose.Schema({
    numeral: { type: String, required: true, unique: true },
    value: { type: Number, required: true, unique: true }
}, { collection: 'romen'});

romanSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Roman', romanSchema);
