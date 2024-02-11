const express = require("express");
const router = express.Router();
const {
    getallcontacts, UpdateContacts,CreateContact,DeleteContact, OneContact,AllContacts,
}=require('../controllers/contactController.js')

//get all contacts
router.route("/").get(AllContacts).post(CreateContact);

//udpate contact
router.route("/:id").put(UpdateContacts).delete(DeleteContact).get(OneContact);




module.exports = router; // Export the router directly
