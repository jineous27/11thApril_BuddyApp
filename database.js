const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://buddy-user-11th:wlsl4378@cluster0-khvhb.mongodb.net/test", {useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => console.log ("Congratulations MongoDB is Connected"))
    .catch(err => console.log(error));