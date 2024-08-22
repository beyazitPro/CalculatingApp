//doin calculating Currency operations in the script

import { getCurrency } from './Api'

//variables
var Input = '';
var InputNotSymbol = '';
var result = '';
var countDot = 0;
var canDotEnter = false;
var Symbol1Len = 1;
var baseCurrency;
var targetCurrency;

//Currenc list and symbols
export const currencyList = [
    { label: 'Amerikan doları', value: 'USD', symbol: '$' },
    { label: 'Euro', value: 'EUR', symbol: '€' },
    { label: 'Türk lirası', value: 'TRY', symbol: '₺' },
    { label: 'Japon yeni', value: 'JPY', symbol: '$' },
    { label: 'Birleşik Krallık İngiliz sterlini', value: 'GBP', symbol: '£' },
    { label: 'Çin Renminbi', value: 'CNY', symbol: '¥' },
    { label: 'Avustralya doları', value: 'AUD', symbol: 'A$' },
    { label: 'Kanada doları', value: 'CAD', symbol: 'C$' },
    { label: 'İsviçre frangı', value: 'CHF', symbol: 'CHF' },
    { label: 'Hong Kong doları', value: 'HKD', symbol: 'HK$' },
    { label: 'Singapur doları', value: 'SGD', symbol: 'S$' },
    { label: 'İsveç kronu', value: 'SEK', symbol: 'kr' },
    { label: 'Güney Kore wonu', value: 'KRW', symbol: '₩' },
    { label: 'Norveç kronu', value: 'NOK', symbol: 'kr' },
    { label: 'Yeni Zelanda doları', value: 'NZD', symbol: 'NZ$' },
    { label: 'Hindistan rupisi', value: 'INR', symbol: '₹' },
    { label: 'Meksika pesosu', value: 'MXN', symbol: '$' },
    { label: 'Yeni Tayvan doları', value: 'TWD', symbol: 'NT$' },
    { label: 'Güney Afrika randı', value: 'ZAR', symbol: 'R' },
    { label: 'Brezilya Brezilya reali', value: 'BRL', symbol: 'R$' },
    { label: 'Danimarka Danimarka kronu', value: 'DKK', symbol: 'kr' },
];

//Currency asignment in local variables
export function setCurrency(base, target) {
    baseCurrency = base === null ? 'TRY' : base;
    targetCurrency = target === null ? 'TRY' : target;
}

//finding symbols of the selected currencys
const returnSymbol = () => {
    const baseItem = currencyList.find(element => element.value === baseCurrency);
    const targetItem = currencyList.find(element => element.value === targetCurrency);
    return [baseItem ? baseItem.symbol : '₺', targetItem ? targetItem.symbol : '₺'];
}

//deleting the symbol in Input variable for calculating
function DeleteSymbol() {
    const symbols = returnSymbol();
    Symbol1Len = symbols[0].length;
    InputNotSymbol = Input.substring(0, Input.length - Symbol1Len);
    return InputNotSymbol;
}

// coming number value adding to Input variable
export async function WriteNum(Num) {
    const symbols = returnSymbol();
    if (Input.length < 16) {
        DeleteSymbol();
    }

    const currency = await getCurrency(baseCurrency == null ? 'TRY' : baseCurrency, targetCurrency == null ? 'TRY' : targetCurrency);
    if (Num == '.' && countDot == 0) {
        if (canDotEnter == true) {
            if (Input.length < 16) {
                Input = InputNotSymbol + Num + '0' + (symbols[0] === null ? '' : symbols[0]);
                result = (parseFloat(Input) * parseFloat(currency)).toFixed(2) + (symbols[1] === null ? '' : symbols[1]);
            }

            countDot = 1;
        }
    }

    else if (Num != '.') {
        Input = InputNotSymbol;
        if (Input.substring(Input.length - 2, Input.length) == '.0') {
            InputNotSymbol = InputNotSymbol.substring(0, InputNotSymbol.length - 1);
        }

        if (Input.length < 16) {
            Input = InputNotSymbol + Num + (symbols[0] === null ? '' : symbols[0]);
            result = (parseFloat(Input) * parseFloat(currency)).toFixed(2) + (symbols[1] === null ? '' : symbols[1]);
        }

        canDotEnter = true;
    }
}

//Clear variables
export function Clear() {
    Input = '';
    countDot = 0;
    canDotEnter = 0;
    result = '0';
}

//delete the last number of the Input value
export function DeleteLastNumber() {
    if (Input.substring(Input.length - 1, Input.length) == '.') {
        countDot = 0;
        canDotEnter = false;
    }

    DeleteSymbol();
    const symbols = returnSymbol();

    Input = InputNotSymbol;
    Input = (Input.substring(0, Input.length - 1) === '' ? '0' : Input.substring(0, Input.length - 1)) + (symbols[0] === null ? '' : symbols[0]);
    UpdateResult(baseCurrency, targetCurrency);
}

//calculating result
export async function UpdateResult(base, target) {
    setCurrency(base, target);
    const currency = await getCurrency(base == null ? 'TRY' : base, target == null ? 'TRY' : target);
    const symbols = returnSymbol();
    result = (parseFloat(Input) * parseFloat(currency)).toFixed(2) + (symbols[1] === null ? '' : symbols[1]);
    DeleteSymbol();
    Input = InputNotSymbol + (symbols[0] === null ? '' : symbols[0]);
}


export const getNum = () => Input;//return Input

export const getResult = () => result;//return result
