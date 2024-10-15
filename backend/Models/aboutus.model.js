const mongoose = require('mongoose');

// about us content like about website, president speech and sachiv speech
const aboutusSchema = new mongoose.Schema({
    aboutus:{type:String},
    presidentSpeech:{type:String},
    sachivSpeech:{type:String} 
},{
    timestamps:true
});

const AboutUs = mongoose.model('AboutUs', aboutusSchema);

module.exports = AboutUs;