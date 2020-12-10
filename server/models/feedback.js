const mongoose = require('mongoose');

var Feedback = mongoose.model('tracker',{
    username: { type: String },
    eventname: { type: String },
    eventreview: { type: String },
    eventmood: { type: String }    
});

module.exports = {Feedback};