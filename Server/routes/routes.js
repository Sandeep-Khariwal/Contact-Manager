const express = require("express")
const {Register , Login} = require("../controller/userController.js")
const {addContact , getContacts , getContactById , editContact , deleteContact } = require("../controller/contactController.js")


const router = express.Router();

// routes of registering and login user
router.route("/register").post(Register);
router.route("/login").post(Login);

// routes of saving and editing contact list
router.route("/addContact").post(addContact)
router.route("/").get(getContacts)
router.route("/:id").get(getContactById)
router.route("/:id").put(editContact)
router.route("/:id").delete(deleteContact)

module.exports = router