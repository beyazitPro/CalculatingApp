//this script include with exchange api
import axios from "axios";

const apiKey = 'aedba88fb51f877632f5f63d'; 
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

//this function returns currency info
export async function getCurrency(baseCurrency='TRY', targetCurrency='TRY') {
    try {
        const response = await axios.get(`${url}${baseCurrency}`);
        const exchangeRates = response.data.conversion_rates;
        const rate = exchangeRates[targetCurrency];

        if (rate) {
            return rate;
        } else {
            throw new Error(`Currency didn't find ${baseCurrency} to ${targetCurrency}`);
        }
    } catch (error) {
        console.error('API error', error);
        return null;
    }
}
