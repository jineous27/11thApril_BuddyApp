const express = require('express');
const router = express.Router();
const deliveryOrderStatusModel = require("../models/DeliveryORderStatus")

//CRUD Create Retrieve Update Delete

// Get Whole Delivery Order Status ID
router.get ('/', (req, res) =>{
    res.json ({
        msg: "Successfully GET whole Delivery Order Status ID"
    });
});


// Get Certain Delivery Order Status ID
// Post Delivery Order Status ID
router.post ('/', (req, res) => {
    const newdeliveryOrderStatusId = new deliveryOrderStatusModel({
        delivery_status_id: req.body.delivery_status_id,
        buddy_task_id: req.body.buddy_task_id,
        delivery_order_status: req.body.delivery_order_status,
        time_to_accept: req.body.time_to_accept,
        time_to_pickup: req.body.time_to_pickup,
        time_to_complete: req.body.time_to_complete,
        time_to_incomplete: req.body.time_to_incomplete,
        time_to_cancel: req.body.time_to_cancel
    });

    newdeliveryOrderStatusId
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to buddy id",
                createdBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json ({
                error: err.message
            });
        });


    // res.json ({
    //     msg: "Successfully POST Delivey Order Status ID"
    // });
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


module.exports =router;