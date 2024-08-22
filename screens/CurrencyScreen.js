//CurrencyScreen
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Keyboard from '../components/Keyboard'
import CurrencySelection from '../components/CurrencySelection'
import { useState, useEffect } from 'react'
import { getNum, WriteNum, Clear, DeleteLastNumber, getResult, setCurrency } from '../scripts/CurrencyScript'

export default function CurrencyScreen({ navigation }) {
    //in rendering clean the Input and change th currency to TRY
    useEffect(() => {
        Clear();
        setCurrency('TRY', 'TRY');
    }, []);

    //usestate for Input Value in CurrencyScript
    const [Num, setNum] = useState(getNum())

    //when the Input value change assign to useState
    useEffect(() => {
        const interval = setInterval(() => {
            setNum(getNum());
        },);
        return () => clearInterval(interval);
    }, [getNum()]);

    //usestate for Result Value in CurrencyScript
    const [result, setResult] = useState(getResult())

    //when the Result value change assign to useState
    useEffect(() => {
        const interval = setInterval(() => {
            setResult(getResult());
        },);
        return () => clearInterval(interval);
    }, [getResult()]);

    //sayfa her yükleendiğinde kuru TL olarak değiştirme
    useEffect(() => {

    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.CurrencyText}>Currency App</Text>
            <CurrencySelection></CurrencySelection>
            <View style={styles.Inputs}>
                <Text style={styles.Input}>{Num === '' ? '0' : Num}</Text>
                <Text style={styles.Input}>={result === '' ? '0' : result}</Text>
            </View>


            <View style={styles.totalKeyboard}>
                <Keyboard Button1Text={'C'} Button1Func={() => Clear()} Button2Text={'del'} Button2Func={() => DeleteLastNumber()} Button3Text={'.'} Button3Func={() => WriteNum('.')} isThreeButton={true}></Keyboard>

                <Keyboard Button1Text={'7'} Button1Func={() => WriteNum('7')} Button2Text={'8'} Button2Func={() => WriteNum('8')} Button3Text={'9'} Button3Func={() => WriteNum('9')} isThreeButton={true}></Keyboard>

                <Keyboard Button1Text={'4'} Button1Func={() => WriteNum('4')} Button2Text={'5'} Button2Func={() => WriteNum('5')} Button3Text={'6'} Button3Func={() => WriteNum('6')} isThreeButton={true}></Keyboard>

                <Keyboard Button1Text={'1'} Button1Func={() => WriteNum('1')} Button2Text={'2'} Button2Func={() => WriteNum('2')} Button3Text={'3'} Button3Func={() => WriteNum('3')} isThreeButton={true}></Keyboard>

                <Keyboard Button1Text={'0'} Button1Func={() => WriteNum('0')} oneButton={true}></Keyboard>
            </View>

            <View style={styles.ReturnButtonView}>
                <TouchableOpacity style={styles.keyboardButtton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Return Calclating Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    keyboardButtton: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#205b7a',
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 12
    },

    buttonText: {
        color: '#a2bbcf',
        fontSize: 20,
    },

    container: {
        backgroundColor: '#1d3849',
        flex: 1
    },

    CurrencyText: {
        marginTop: 50,
        marginLeft: 30,
        color: '#000000',
        fontSize: 25,
        fontStyle: 'italic'
    },

    Input: {
        fontSize: 40,
        color: '#a2bbcf',
        textAlign: 'right',
        marginRight: 10,
    },

    Inputs: {
        marginTop: 35
    },

    ReturnButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 20
    },

    totalKeyboard: {
        marginTop: 2
    }
})
