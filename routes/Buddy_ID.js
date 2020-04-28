const express = require('express');
const router = express.Router();
const buddyIdModel = require("../models/Buddy_ID");

//CRUD Create Retrieve Update Deleted

//전체 Buddy ID 불러오기 
router.get('/', (req, res) => {
    res.json ({
        msg: "Successfully get whole Buddy's ID"
    });
});

// 부분 Buddy ID 불러오기
//Buddy ID 등록하기
router.post ('/', (req, res) => {
    const newbuddyId = new buddyIdModel ({
        delivery_buddy_id: req.body.delivery_buddy_id,
        buddy_first_name: req.body.buddy_first_name,
        buddy_last_name: req.body.buddy_last_name,
        buddy_account_email: req.body.buddy_account_email,
        buddy_account_password: req.body.buddy_account_password,
        agreed_TermsConditions: req.body.agreed_TermsConditions,
        buddy_dateOf_birth: req.body.buddy_dateOf_birth,
        buddy_work_type: req.body.buddy_work_type,
        buddy_abn: req.body.buddy_abn,
        buddy_gst_registration: req.body.buddy_gst_registration,
        buddy_contact_number: req.body.buddy_contact_number,
        buddy_emergence_name: req.body.buddy_emergence_name,
        buddy_emergence_number: req.body.buddy_emergence_number
    });

    newbuddyId
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to buddy task Id",
                createdBuddyIdinfo: result    
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json ({
    //     msg: "Successfully post buddy's ID"
    // });
});


// Buddy ID 업데이트 
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully patch buddy's ID"
    });
});


// Buddy ID 삭제하기 
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully delete buddy's ID"
    });
});









module.exports =router;



