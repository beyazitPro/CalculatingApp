//doing calculating operations in the script

//variables
var Num = '';
var Num2 = '';
var fristNumber = 0;
var secondNumber = 0;
var operation = '';
var countDot = 0;
var canOperate = false;
var canDotEnter = false;

// coming number value adding to Input variable
export function WriteNumber(ButtonNumber) {
    Num = Num.toString();
    if (ButtonNumber == '.' && countDot == 0) {
        if (canDotEnter == true) {
            if (Num.length < 51)
                Num += ButtonNumber + '0';
            countDot = 1;
        }

    }

    else if (ButtonNumber != '.') {
        if (Num.toString().substring(Num.length - 2, Num.length) == '.0')
            Num = Num.substring(0, Num.length - 1);

        if (Num.length < 51)
            Num += ButtonNumber;
        canDotEnter = true;
    }

    canOperate = true;
}

//On click whichever one operation button
export function operationfunction(opName, opSymbol) {
    if (canOperate == true) {
        Num2 = '';
        Num2 = Num + " " + opSymbol + " ";
        fristNumber = parseFloat(Num);
        Num = '';
        operation = '';
        operation = opName;
        countDot = 0;
    }

}

//on click equals
export function equals() {
    if (operation != '') {
        secondNumber = parseFloat(Num === '' ? Num = '0' : Num);
        Num2 += Num;
        Num = '';
        switch (operation) {
            case "plus":
                Num = parseFloat((fristNumber + secondNumber)); break;
            case "minus":
                Num = fristNumber - secondNumber; break;

            case "multiplication":
                Num = fristNumber * secondNumber; break;

            case "division":
                Num = fristNumber / secondNumber; break;

            case "percent":
                Num = fristNumber * (secondNumber / 100); break;

            case "pow":
                Num = Math.pow(fristNumber, secondNumber); break;
        }
    }

}

//Claer variables
export function ClearNumber() {
    Num = Num2 = '0';
    fristNumber = secondNumber = 0;
    operation = '';
    countDot = 0;
    canOperate = false;
    canDotEnter = false;
}

//deleting last variables
export function DeleteLastNumber() {
    if (Num.substring(Num.length - 1, Num.length) == '.') {
        countDot = 0;
        canDotEnter = false;
    }


    Num = Num.toString();
    Num = Num.substring(0, Num.length - 1);
}

//calculating 1/X operation
export function getDivisionToOne() {
    if (canOperate == true) {
        Num2 = '1/' + Num;
        Num = 1 / Num;
    }
}

//calculating factorial
export function getFactorial() {
    if (canOperate == true) {
        Num2 = '!' + Num;
        let result = 1;
        for (let i = 2; i <= Num; i++) {
            result *= i;
        }
        Num = result;
    }
}

//calculating square
export function getsquirt() {
    if (canOperate == true) {
        Num2 = '√' + Num;
        Num = Math.sqrt(parseFloat(Num));
    }
}

export const getNumber = () => Num; //return Num

export const getNumber2 = () => Num2; //return Num2
