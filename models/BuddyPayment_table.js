const mongoose = require ('mongoose');
const buddyPaymentSchema = mongoose.Schema (
    {
        delivery_payment_id: {
            type: Number,
            required: true
        },
        order_id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        delivery_service_fee: {
            type: Number,
            required: true
        }
    },
    {
        timestamp: true
    }
);


module.exports = mongoose.modle ("buddy_payment_id", buddyPaymentSchema);