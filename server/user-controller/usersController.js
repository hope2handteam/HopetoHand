
import jtw from "jsonwebtoken";
import userModel from "../models/users.js";


    

export const getUser = async (req, res) => {
  //code here
  try {
    const users = await userModel.find();
    res.status(200).json({ details: users });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  //code here
  try {
    const user = new userModel(req.body);
    await user.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log(error.message);
  }
};



export const postUser = async (req, res) => {
  //code here
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  //code here
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateUser = async (req, res) => {
  //code here
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};


    
    export const loggedIn = async (req, res) => {
     
        try {
          const user = await signupModel.findById(req.user.id).select("-password");
          res.status(200).json(user);
          console.log(signupModel)
        } 
       
        catch (error) {
          res.json(error.message);
        }
      
      };
