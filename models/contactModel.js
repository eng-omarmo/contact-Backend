const  mongoose= require('mongoose');

const contactSchema=mongoose.Schema({
    name:{
        type : String,
        required:[true,'please enter the contact Name']
    },
    email:{
        type : String,
        required:[true,'please enter the contact Email']
    },
    phone:{
        type : String,
        required:[true,'please enter the contact Phone']
    }
},{
    timestam:true,
});

module.exports=mongoose.model('contact',contactSchema)