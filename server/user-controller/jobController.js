
import usersModel from "../models/users.js";
import jobFormModel from "../models/jobFormModel.js";

export const postjob = async (req, res) => {


    const { address, city, jobType, numberOfPersons} = req.body;
    try {
        const user = await usersModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        console.log(user);
        const job = new jobFormModel({
            address,
            city,
            jobType,
            numberOfPersons,   

        });

       


        await job.save();
        user.job.push(job._id);
        await user.save();
        res.status(200).json({ msg: "job Added!" });
    } catch (error) {
        res.status(500).send("Error");
    }

};
export const deletejob = async (req, res) => {
    const { id } = req.params;
    try {
        await jobFormModel.findByIdAndDelete(id);
        const user = await usersModel.findById(req.body.user_id);
        const updatedjob = user.job.filter(item => item != id);
        user.job = updatedjob;
        await user.save();
        res.status(200).json({ msg: "job Deleted!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updatejob = async (req, res) => {
    const { id } = req.params;
    const { address, city, jobType, numberOfPersons, availabilityFrom, availabilityTo, } = req.body;
    try {
        await jobFormModel.findByIdAndUpdate(id, {
            address,
            city,
            jobType,
            numberOfPersons,
            availabilityFrom,
            availabilityTo,
        });
        res.status(200).json({ msg: "job Updated!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAlljob = async (req, res) => {
    //code here
    try {
      const job = await jobFormModel.find();
      res.status(200).json({ data: job });
    } catch (error) {
      console.log(error.message);
    }
  };