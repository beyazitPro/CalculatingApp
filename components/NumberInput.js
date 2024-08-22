//the component show the number in Calculating screen.
import { StyleSheet, Text, View } from 'react-native'
import { getNumber,getNumber2} from '../scripts/FunctionsScripts'
import { useEffect, useState } from 'react'

export default function NumberInput() {
    //usestate for number(Input) Value in functionScript
    const [number, setNumberState] = useState(getNumber());

    //when the number(Input) value change assign to useState
    useEffect(() => {
        const interval = setInterval(() => {
            setNumberState(getNumber());
        }, );
        return () => clearInterval(interval);
    }, [getNumber()]);

        //usestate for number2(result) Value in functionScript
        const [number2, setNumberState2] = useState(getNumber2());

        //when the number2(result) value change assign to useState
        useEffect(() => {
            const interval = setInterval(() => {
                setNumberState2(getNumber2());
            }, );
            return () => clearInterval(interval);
        }, [getNumber2()]);

    return (
        <View>
            <Text style={styles.Input1}>{number2 === '' ?  '0': number2}</Text>
            <Text style={styles.Input}>{number === '' ?  '0': number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        fontSize: 40,
        color: '#a2bbcf',
        textAlign: 'right',
        marginRight: 10,
    },

    Input1: {
        fontSize: 20,
        color: '#a2bbcf',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 100
    },
})