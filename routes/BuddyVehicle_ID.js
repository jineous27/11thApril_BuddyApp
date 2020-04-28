const express = require('express');
const router = express.Router();
const buddyVehicleIdModel = require("../models/BuddyVehicle_ID");

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
    const newbuddyVehicleId = new buddyVehicleIdModel ({
        buddy_vehicle_id: req.body.buddy_vehicle_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        vehicle_registration_number: req.body.vehicle_registration_number,
        vehicle_model: req.body.vehicle_model,
        vehicle_color: req.body.vehicle_color,
        vehicle_insurance: req.body.vehicle_insurance,
        vehicle_insurance_documents: req.body.vehicle_insurance_documents
    })
    
    newbuddyVehicleId
    .save()
    .then(result => {
        res.status(201).json({
            message: "Handling POST requests to buddy ID",
            createdBuddyIdInfo: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });

    // res.json ({
    //     msg: "Successfully POST Buddy's Vehicle ID"
    // });
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




module.exports =router;