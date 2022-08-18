import express from "express";
import { createUser } from "../user-controller/signupController.js";
import { loginUser } from "../user-controller/signinController.js";
import { getUser, deleteUser, updateUser, loggedIn, saveContactForm } from "../user-controller/usersController.js";
import auth from "../middle/auth.js";
import { body } from "express-validator";
import { deleteAccomodation, updateAccomodation, postAccomodation, getAllAccomodation } from "../user-controller/accomodationController.js";

const router = express.Router();




//-------------Users------------
router.post("/signup", [
  body("name").notEmpty().withMessage("First name is required").trim(),
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

router.post("/accomodationform", auth, postAccomodation);
router.delete("/deleteAccomodation/:id", auth, deleteAccomodation);
router.put("/updateAccomodation/:id", auth, updateAccomodation);
router.get("/getAccomodation", getAllAccomodation);

// ------------ContactForm------------

router.post("/contactform", saveContactForm);

// -------------Help------------


// -------------Jobs------------




router.get("/autho", auth, loggedIn);

// router.get("/cache",getCache)
export default router;

