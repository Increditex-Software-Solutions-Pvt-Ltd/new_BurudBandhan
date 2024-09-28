const mongoose = require('mongoose');

// It will be change 
const profileSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    },
    mobile: {
        type: String,  
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);  // Example validation, adjust as necessary
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],  
        required: true
    },
    profileImage: {
        type: String,
        default: "default-profile.png"
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {  
        type: String,
        required: true
    },
    taluka: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
},{
    timestamps:true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile ;


