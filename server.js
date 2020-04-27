const express = require('express');
const app = express();


const buddyIdRoutes = require('./routes/Buddy_ID');
const buddyVehicleIdRoutes = require('./routes/BuddyVehicle_ID');
const buddytaskidRoutes = require ('./routes/BuddyTask_ID');
const deliveryOrderStatusRoutes = require('./routes/DeliveryOrderStatus');
const buddyPaymentIdRoutes = require('./routes/BuddyPayment_table');


require("./database");
app.use ('/api/buddyid', buddyIdRoutes);
app.use ('/api/buddyvehicleid', buddyVehicleIdRoutes);
app.use ('/api/buddytaskid', buddytaskidRoutes);
app.use ('/api/deliveryorderstatusid', deliveryOrderStatusRoutes);
app.use ('/api/buddypaymentid', buddyPaymentIdRoutes);



const port = 2222;
app.listen(port, console.log(`Server is running on port ${port}`));

