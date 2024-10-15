const mongoose = require('mongoose');

// about us content like about website, president speech and sachiv speech
const aboutusSchema = new mongoose.Schema({
    aboutus:{ type:String, trim:true },
    presidentSpeech:{ type:String, trim:true },
    sachivSpeech:{ type:String, trim:true } 
},{
    timestamps:true
});

const AboutUs = mongoose.model('AboutUs', aboutusSchema);

module.exports = AboutUs;