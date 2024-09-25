const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
    weddingPicture: { type:String, required:true},
    brideName: { type:String, required:true },
    groomName: { type:String, required:true },
    city: { type:String, required:true },
    description:{type: String, required: true }
    
});


const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

module.exports = { SuccessStory };