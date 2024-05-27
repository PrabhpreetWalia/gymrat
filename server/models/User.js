const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        measurements: {
            height: [{measurement: Number, date: Date}],
            weight: [{measurement: Number, date: Date}]
        },
        record: {
            type: Map,
            of: [{ type: mongoose.Schema.Types.Mixed }]
        }
    },
    { collection: 'user-data'}
)

const model = mongoose.model('userData', User)

module.exports = model