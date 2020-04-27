const mongoose = require("mongoose");

mongoose.connect("", {useNewUrlParser:true})
    .then() => console.log ("Congratulations MongDB is Connected")
    .catch(err => console.log(error));