const mongoose = require('mongoose');

uri='mongodb+srv://aranya30:xlLDBUE7pVGkvyY2@cluster0.maxru.mongodb.net/trackerdb?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
        console.log('MongoDB connection successful');
    else
        console.log(err);
    
});

module.exports = mongoose;
