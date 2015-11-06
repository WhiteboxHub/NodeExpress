var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobModel = new Schema({
    id: {type: Number},
    keywords: {type: String},
    source: {type: String},
    jobsite: {type: String}
});

module.exports = mongoose.model('jobs', jobModel);