import mongoose from "mongoose";




const statusFormSchema = new mongoose.Schema({
  
    lastActive: { type: Date, default: Date },
    numbers: { type: Number, default: 0 }

 



});

const StatusFormModel = mongoose.model("status", statusFormSchema);

export default StatusFormModel;