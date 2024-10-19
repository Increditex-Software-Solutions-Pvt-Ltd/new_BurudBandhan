const mongoose = require('mongoose');

const presentlyWorkingSchema = new mongoose.Schema({
    status:{
        type:String,
        enum:['Yes', 'No'], 
        required:true
    },
    category:{
        type:String,
        enum:["Government", "Private", "Business"],
        
    },
    details:{
        type:String,
        
    }
})

// It will be change 
const profileSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    birthName: {
        type: String,
        required: true
    },
    birthPlace:{
        type:String,
        required:true
    },
    dateOfBirth: {
        type: Date, 
        required: true
    },
    timeOfBirth: {
        type: Date, // check type once
        required:true
    },
    height: {
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String, 
        required:true
    },
    photo: {
        type:String, 
        default: "default-profile.png"
    },
    qualification:{
        type:String,
        required:true
    },
    presentlyWorking:presentlyWorkingSchema ,
    annualIncome:{
        type:String,
        required:true
    },
    expectation:{
        type:String,
        required:true
    },
    hobbies:{
        type:Array,
        
    },
    permenantAddress:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    fatherOccupation:{
        type:String,
        required:true,
    },
    motherName:{
        type:String,
        required:true,
    },
    totalFamilyMembers:{
        type:Number,
        required:true,
    },
    maternalUncleName:{
        type:String,
        required:true,
    },
    relativesSurnameList:{
        type:Array,
        required:true,
    },
    email: {
        type: String,
    },
    personalContact: {
        type: String,  
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);  // Example validation, adjust as necessary
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    parentsContact: {
        type: String,  
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);  // Example validation, adjust as necessary
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    currentAddress:{
        type:String,
        required:true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],  
        required: true
    },
    category:{
        type:String,
        enum:["new_marriage", "physically_disabled", "remarriage"],
        required:true
    },
    details_of_physically_disability:{
        type:String
    },
    details_of_previous_marriage:{
        type:String
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
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    }
    
    
},{
    timestamps:true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile ;


