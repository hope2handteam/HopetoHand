import mongoose from "mongoose";




const jobFormSchema = new mongoose.Schema({
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
    jobType: {
        type: String,
        required: true,
        // minlength: 6
    },
    jobList: {
        type: String,
        required: true,
        // minlength: 6
    },
    jobProvider: {
        type: String,
        required: true,
        // minlength: 6
    },
    salaryBasis: {
        type: String,
        required: true,
        // minlength: 6
    },

    startDate: {
        type: Date,
        
    } ,
    endDate: {
        type: Date,
       
    } ,


 



});

const jobFormModel = mongoose.model("job", jobFormSchema);

export default jobFormModel;