const mongoose = require ('mongoose');
const buddyTaskIdSchema = mongoose.Schema(
    {
        delivery_task_id: {
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
        delay_at_shop: {
            type: Boolean,
            default: false
        },
        shop_delay_reason: {
            type: String
        },
        buddy_comment_delay: {
            type: String
        },
        users_signature: {
            type: String
        },
        cash_receivable: {
            type: String
        },
        buddy_service_fee: {
            type: String,
            required: true
        },
        buddy_task_status: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }

);

module.exports = mongoose.model ("buddy_task_id", buddyTaskIdSchema);