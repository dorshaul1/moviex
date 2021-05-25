import contactService from './contactService'
import { userService } from './userService'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTradePrice,
    addMove
}

const axios = require('axios')

async function getMarketPrice() {
    let price = await axios.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true")
    return price.data
}
async function getTradePrice() {
    let price = await axios.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true")
    return price.data
}

async function getRate(coins) {
    let rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return rate.data
}

async function addMove(toId, amount) {
    const contact = await contactService.getContactById(toId)
    contact.coins += amount
    const move = await _createEmaptyMove(toId, amount)
    userService.updateUserMove(move)
    
}

async function _createEmaptyMove(toId, amount) {
    return {
        // toId,
        to: await contactService.getContactById(toId),
        at: Date.now(),
        amount
    }
}