const mongoose = require('mongoose');

const successVideoSchema = new mongoose.Schema({
    url:{type:String, required:true},
    year: {type:String, required:true},
    description: {type:String, required:true},
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
}); 


const SuccessVideo = mongoose.model('SuccessVideo', successVideoSchema);

module.exports = { SuccessVideo };