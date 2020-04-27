const express = require('express');
const router = express.Router();

//CRUD Create Retrieve Update Delete

// GET Entire Buddy Task ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Entire Buddy Task ID"
    });
});

// Get some Buddy Task ID

// Post Buddy Task ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Buddy Task ID"
    });
});



// Patch Buddy Task ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Buddy Task ID"
    });
});


// Delete Buddy Task ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Buddy Task ID"
    });
});




module.exports =router;