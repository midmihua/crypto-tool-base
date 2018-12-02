const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create market crypto-pair data storage schema and model
const MarketPairSchema = new Schema({
    user: { type: String, required: true },
    market: { type: String, required: true, default: 'binance' },
    url: { type: String, default: 'https://www.binance.com/en' },
    description: String,
    coin: { type: String, required: true },
    orders: [
        {
            pair: { type: String, required: true },
            price: { type: Number, default: 0, required: true },
            count: { type: Number, default: 0, required: true },
            status: { type: String, enum: ['open', 'close'], default: 'close', required: true },
            date: { type: Date, default: Date.now }
        }
    ]
});

MarketPairSchema.index({ user: 1, coin: 1 }, { unique: true });

const MarketPairModel = mongoose.model(process.env.MONGO_DATABASE_ORDER_HIST, MarketPairSchema);

module.exports = MarketPairModel;
