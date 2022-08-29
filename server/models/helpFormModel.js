import mongoose from "mongoose";




const helpFormSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true

    }
    ,
    contactEmail: {
        type: String,
        required: true

    }
    ,
    contactNumber: {
        type: String,
        required: true

    }
    ,

    city: {
        type: String,
        required: true,
        // minlength: 6
    },
    typeOfLanguage: {
        type: String,
        required: true,
        // minlength: 6
    },
    helperOrg: {
        type: String,
        required: true,
        // minlength: 6
    },
    helpType: {
        type: String,
        required: true,
        // minlength: 6
    },

    startDate: {
        type: Date,
        required: true,
    } ,
    endDate: {
        type: Date,
        required: true,
    } ,


 



});

const helpFormModel = mongoose.model("help", helpFormSchema);

export default helpFormModel;