const express = require('express');
const router = express.Router();

//CRUD Create Retrieve Update Delete

// GET Buddy Payment ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET whole Buddy Payment ID"
    });
});

// GET certain Buddy Payment ID
// Post Buddy Payment ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Buddy Payment ID"
    });
});


// Patch Buddy Payment ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Succcessfully PATCH Buddy Payment ID"
    });
});

// Delete Buddy Payment ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Buddy Payment ID"
    });
});








module.exports =router;