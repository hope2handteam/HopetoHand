import mongoose from "mongoose";




const accomodationFormSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true

    }
    ,

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

    availabilityFrom: {
        type: Date,
        required: true,
    } ,
    availabilityTo: {
        type: Date,
        required: true,
    } ,


 



});

const accomodationFormModel = mongoose.model("Accomodation", accomodationFormSchema);

export default accomodationFormModel;