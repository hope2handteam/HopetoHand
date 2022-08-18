import accomodationFormModel from "../models/accomodationFormModel";
import usersModel from "../models/users";

export const postAccomodation = async (req, res) => {


    const { address, city, accomodationType, numberOfPersons, availabilityFrom, availabilityTo, user_id } = req.body;
    try {
        const user = await usersModel.findById(user_id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const accomodation = new accomodationFormModel({
            address,
            city,
            accomodationType,
            numberOfPersons,
            availabilityFrom,
            availabilityTo,


        });



        await accomodation.save();
        user.accomodation.push(accomodation._id);
        await user.save();
        res.status(200).json({ msg: "Accomodation Added!" });
    } catch (error) {
        res.status(500).send(error);
    }

};
export const deleteAccomodation = async (req, res) => {
    const { id } = req.params;
    try {
        await accomodationFormModel.findByIdAndDelete(id);
        const user = await usersModel.findById(req.body.user_id);
        const updatedAccomodation = user.accomodation.filter(item => item != id);
        user.accomodation = updatedAccomodation;
        await user.save();
        res.status(200).json({ msg: "Accomodation Deleted!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateAccomodation = async (req, res) => {
    const { id } = req.params;
    const { address, city, accomodationType, numberOfPersons, availabilityFrom, availabilityTo, } = req.body;
    try {
        await accomodationFormModel.findByIdAndUpdate(id, {
            address,
            city,
            accomodationType,
            numberOfPersons,
            availabilityFrom,
            availabilityTo,
        });
        res.status(200).json({ msg: "Accomodation Updated!" });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllAccomodation = async (req, res) => {
    //code here
    try {
      const accomodation = await accomodationFormModel.find();
      res.status(200).json({ details: accomodation });
    } catch (error) {
      console.log(error.message);
    }
  };