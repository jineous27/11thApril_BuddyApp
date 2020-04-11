const express = require('express');
const router = express.Router();

//CRUD Create Retrieve Update Delete

// Get Whole Delivery Order Status ID
router.get ('/', (req, res) =>{
    res.json ({
        msg:"Successfully GET whole Delivery Order Status ID"
    });
});


// Get Certain Delivery Order Status ID
// Post Delivery Order Status ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Delivey Order Status ID"
    });
});


// Patch Delivery Order Status ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Delivery Order Status ID"
    });
});


// Delete Delivery Order Status ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Delivery Order Status ID"
    });
});


module.exports =router 