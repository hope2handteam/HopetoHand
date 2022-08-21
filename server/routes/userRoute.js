import express from "express";
import { createUser } from "../user-controller/signupController.js";
import { loginUser } from "../user-controller/signinController.js";
import { getUser, deleteUser, updateUser, loggedIn, saveContactForm } from "../user-controller/usersController.js";
import auth from "../middle/auth.js";
import { body } from "express-validator";
import { deleteAccomodation, updateAccomodation, postAccomodation, getAllAccomodation, } from "../user-controller/accomodationController.js";
import { getAllStatus, postStatus, deleteStatus } from "../user-controller/statusController.js";
// import { sendEmail } from "../user-controller/sendEmail.js";

const router = express.Router();




//-------------Users------------
router.post("/signup", [
  body("userName").notEmpty().withMessage("First name is required").trim(),
  body("password", "Password is required and length min 4 chars.")
    .isLength({ min: 4 })
    .custom((val, { req }) => {
      if (val !== req.body.confirm_password) {
        throw new Error("Password don't match!");
      } else {
        return val;
      }
    }),
], createUser

);

router.post("/login", loginUser);
router.get("/user", auth, getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);


// ------------Accomodation------------
router.get("/getaccomodations", getAllAccomodation);
router.post("/accomodationform", auth, postAccomodation);
router.delete("/deleteaccomodation/:id",auth, deleteAccomodation);
router.put("/updateaccomodation/:id", auth, updateAccomodation);


// ------------ContactForm------------

router.post("/contactform", saveContactForm);

// -------------Help------------


// -------------Jobs------------

router.get("/getstatus", getAllStatus);
router.post("/poststatus", auth,loggedIn, postStatus);
router.delete("/deletestatus/:id",auth, deleteStatus);


router.get("/autho", auth, loggedIn);


 
// router.post('/email', sendEmail)
  
// router.get("/cache",getCache)
export default router;

