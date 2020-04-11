const express = require('express');
const router = express.Router();

//CRUD Create Retrieve Update Delete

// GET Buddy's Vehicle ID 
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Buddy's Vehicle ID"
    });
});


// GET Buddy's Vehicle ID

// Post Buddy's Vehicle ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Buddy's Vehicle ID"
    });
});


// Patch Buddy's Vehicle ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Buddy's Vehicle ID"
    });
});


// Delete Buddy's Vehicle ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Buddy's Vehicle ID"
    });
});




module.exports =router 