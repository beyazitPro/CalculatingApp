//selection components styles in CurrencyScreen
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'
import { UpdateResult,currencyList} from '../scripts/CurrencyScript'

export default function CurrencySelection() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(currencyList);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState(currencyList);

    const onChanged = () =>{
        UpdateResult(value,value2);
    }

    const onChanged2 = () =>{
        UpdateResult(value,value2);
    }

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <View>
                    <DropDownPicker
                        style={styles.picker}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={onChanged}
                        placeholder='Select Base Currency'
                    />
                </View>

                <Text style={styles.toText}> ⇄ </Text>
                <View>
                    <DropDownPicker
                        style={styles.picker}
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                        onChangeValue={onChanged2}
                        placeholder='Select Target Currency'
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },

    picker: {
        width: 150,
        marginHorizontal: 2,
    },

    toText: {
        color: '#a2bbcf',
        fontSize: 50
    }

})