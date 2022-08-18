import mongoose from "mongoose";




const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    }
    ,
    
    password: {
        type: String,
        required: true,
        // minlength: 6
    },
  
    accomodation: [{type : mongoose.Schema.Types.ObjectId, ref: "Accomodation"}],
    help: [{type : mongoose.Schema.Types.ObjectId, ref: "Help"}],
    jobs: [{type : mongoose.Schema.Types.ObjectId, ref: "Jobs"}],
   
});

const usersModel = mongoose.model("Register", UsersSchema);

export default usersModel;