const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    memberImage: { type: String, required: true },
    fullName: { type:String, required:true },
    position: { type: String, required: true },

},{ timestamps: true });

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;