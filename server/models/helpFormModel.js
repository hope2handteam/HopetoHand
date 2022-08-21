import mongoose from "mongoose";




const helpFormSchema = new mongoose.Schema({
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
    TypeOfLanguage: {
        type: Number,
        required: true,
        // minlength: 6
    },
    helpType: {
        type: String,
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

const helpFormModel = mongoose.model("help", helpFormSchema);

export default helpFormModel;