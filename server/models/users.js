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
  
   
   
});

const usersModel = mongoose.model("Register", UsersSchema);

export default usersModel;