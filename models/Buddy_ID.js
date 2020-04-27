const mongoose = require ('mongoose');
const buddyIdSchema = mongoose.Schema(
    {
        delivery_buddy_Id: {
            type: Number,
            required: true
        },
        buddy_first_name: {
            type: String,
            required: true
        },
        buddy_last_name: {
            type: String,
            required: true
        },
        buddy_account_email: {
            type: String,
            required: true
        },
        buddy_account_password: {
            type: String,
            required: true
        },
        agreed_TermsConditions: {
            type: Boolean,
            default: false
        },
        buddy_dateOf_birth: {
            type: Date,
            required: true
        },
        buddy_work_type: {
            type: String,
            required: true
        },
        buddy_abn: {
            type: Number,
            required: true
        },
        buddy_gst_registration: {
            type: Boolean,
            default: false
        },
        buddy_contact_number: {
            type: Number,
            required: true
        },
        buddy_emergence_name: {
            type: String,
            required: true
        },
        buddy_emergence_number: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model ("buddy_id", buddyIdSchema);