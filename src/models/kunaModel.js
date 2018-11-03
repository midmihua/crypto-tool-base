const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create crypto pair schema
const PairSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    orders: [
        {
            id: {
                type: Number,
                default: 0
            },
            price: {
                type: Number,
                default: 0
            },
            count: {
                type: Number,
                default: 0
            },
            status: {
                type: Number,
                default: -1
            },
            date:
            {
                type: Date,
                default: Date.now
            }
        }
    ],
    profit: {
        total_count: {
            type: Number,
            default: 0
        },
        total_spent: {
            type: Number,
            default: 0
        },
        avg_price: {
            type: Number,
            default: 0
        },
        current_price: {
            type: Number,
            default: 0
        },
        possible_profit: {
            type: Number,
            default: 0
        },
        possible_profit_percents: {
            type: Number,
            default: 0
        },
        last_updated:
        {
            type: Date,
            default: Date.now
        }
    }
});

// Create Kuna data storage schema and model
const KunaSchema = new Schema({
    market: {
        type: String,
        required: true
    },
    url: String,
    description: String,
    pair: PairSchema
});

const KunaModel = mongoose.model('kuna', KunaSchema);

module.exports = KunaModel;
