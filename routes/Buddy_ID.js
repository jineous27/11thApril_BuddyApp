const express = require('express');
const router = express.Router();

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
    res.json ({
        msg: "Successfully post buddy's ID"
    });
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









module.exports =router



