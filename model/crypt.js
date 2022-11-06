const mongoose = require('mongoose')

const cryptSchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Percent_change_1H: Number,
    Percent_change_7d: Number,
    Percent_change_24h: Number,
    Percent_change_30d: Number,
    market_cap: Number,
    volume_24h: Number,
    Total_supply: Number,
    Symbol: String
})

const cryptModel = mongoose.model('Crypt', cryptSchema)

module.exports = cryptModel