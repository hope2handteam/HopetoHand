import mongoose from "mongoose";




const accomodationFormSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true

    }
    ,

    image:String,

    city: {
        type: String,
        required: true,
        // minlength: 6
    },
    accomodationType: {
        type: String,
        required: true,
        // minlength: 6
    },
    numberOfPersons: {
        type: Number,
        required: true,
        // minlength: 6
    },

    // availabilityFrom: {
    //     type: Number,
    //     required: true,
    // } ,
    // availabilityTo: {
    //     type: Number,
    //     required: true,
    // } ,


 



});

const accomodationFormModel = mongoose.model("Accomodation", accomodationFormSchema);

export default accomodationFormModel;