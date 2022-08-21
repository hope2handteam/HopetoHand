import mongoose from "mongoose";




const jobFormSchema = new mongoose.Schema({
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
    jobType: {
        type: String,
        required: true,
        // minlength: 6
    },
    salaryRange: {
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

const jobFormModel = mongoose.model("job", jobFormSchema);

export default jobFormModel;