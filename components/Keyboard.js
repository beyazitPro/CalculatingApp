//Numeric Buttons components styles
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function keyboard({ Button1Text = 0, Button2Text = 0, Button3Text = 0, Button4Text = 0, Button1Func = null, Button2Func = null, Button3Func = null, Button4Func = null, isThreeButton = false, oneButton = false }) {
  if (isThreeButton == false) {
    if (oneButton == true) { //this is one button return
      return (
        <View style={styles.keyboardContainer}>
          <TouchableOpacity style={styles.keyboardButtton} onPress={Button1Func}>
            <Text style={styles.buttonText}>{Button1Text}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else { //this is four button return
      return (
        <View style={styles.keyboardContainer}>
          <TouchableOpacity style={styles.keyboardButtton} onPress={Button1Func}>
            <Text style={styles.buttonText}>{Button1Text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.keyboardButtton} onPress={Button2Func}>
            <Text style={styles.buttonText}>{Button2Text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.keyboardButtton} onPress={Button3Func}>
            <Text style={styles.buttonText}>{Button3Text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.keyboardButtton} onPress={Button4Func}>
            <Text style={styles.buttonText}>{Button4Text}</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
  else { //this is three button return
    return (
      <View style={styles.keyboardContainer}>
        <TouchableOpacity style={styles.keyboardButtton} onPress={Button1Func}>
          <Text style={styles.buttonText}>{Button1Text}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.keyboardButtton} onPress={Button2Func}>
          <Text style={styles.buttonText}>{Button2Text}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.keyboardButtton} onPress={Button3Func}>
          <Text style={styles.buttonText}>{Button3Text}</Text>
        </TouchableOpacity>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  keyboardButtton: {
    width: 70,
    height: 60,
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
})