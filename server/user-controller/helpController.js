
import usersModel from "../models/users.js";
import helpFormModel from "../models/helpFormModel.js";

export const posthelp = async (req, res) => {


    const { address, city, helpType, numberOfPersons} = req.body;
    try {
        const user = await usersModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        console.log(user);
        const help = new helpFormModel({
            address,
            city,
            helpType,
            numberOfPersons,   

        });

       


        await help.save();
        user.help.push(help._id);
        await user.save();
        res.status(200).json({ msg: "help Added!" });
    } catch (error) {
        res.status(500).send("Error");
    }

};
export const deletehelp = async (req, res) => {
    const { id } = req.params;
    try {
        await helpFormModel.findByIdAndDelete(id);
        const user = await usersModel.findById(req.body.user_id);
        const updatedhelp = user.help.filter(item => item != id);
        user.help = updatedhelp;
        await user.save();
        res.status(200).json({ msg: "help Deleted!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updatehelp = async (req, res) => {
    const { id } = req.params;
    const { address, city, helpType, numberOfPersons, availabilityFrom, availabilityTo, } = req.body;
    try {
        await helpFormModel.findByIdAndUpdate(id, {
            address,
            city,
            helpType,
            numberOfPersons,
            availabilityFrom,
            availabilityTo,
        });
        res.status(200).json({ msg: "help Updated!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllhelp = async (req, res) => {
    //code here
    try {
      const help = await helpFormModel.find();
      res.status(200).json({ data: help });
    } catch (error) {
      console.log(error.message);
    }
  };