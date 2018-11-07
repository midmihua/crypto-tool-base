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

// Create market pair data storage schema and model
const MarketPairSchema = new Schema({
    market: {
        type: String,
        required: true
    },
    url: String,
    description: String,
    pair: PairSchema
});

const MarketPairModel = mongoose.model(process.env.MONGO_DATABASE_ORDER_HIST, MarketPairSchema);

module.exports = MarketPairModel;
