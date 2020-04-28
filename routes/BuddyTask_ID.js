const express = require('express');
const router = express.Router();
const buddyTaskIdModel = require("../models/BuddyTask_ID");
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
const newBuddyTaskId = new buddyTaskIdModel({
    delivery_task_id: req.body.delivery_task_id,
    order_id: req.body.order_id,
    delivery_buddy_id: req.body.delivery_buddy_id,
    delay_at_shop: req.body.delay_at_shop,
    shop_delay_reason: req.body.shop_delay_reason,
    buddy_comment_delay: req.body.buddy_comment_delay,
    users_signature: req.body.users_signature,
    cash_receivable: req.body.cash_receivable,
    buddy_service_fee: req.body.buddy_service_fee,
    buddy_task_status: req.body.buddy_task_status
});

newBuddyTaskId
    .save()
    .then(result => {
        res.status(201).json({
            message: 'Handling POST requests to buddy Task Id',
            createBuddyTaskIdInfo: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });






    // res.json ({
    //     msg: "Successfully POST Buddy Task ID"
    // });
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