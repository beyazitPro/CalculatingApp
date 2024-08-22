//Calculating Screen
import { StyleSheet, Text, View } from 'react-native';
import NumberInput from '../components/NumberInput';
import Keyboard from '../components/Keyboard';
import { WriteNumber, ClearNumber, DeleteLastNumber, operationfunction, equals, getSqrt,getDivisionToOne,getFactorial} from '../scripts/FunctionsScripts'

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.CalculatorText}>Calculator App</Text>
      <NumberInput ></NumberInput>
      <View style={styles.Keyboard}>
        <Keyboard Button1Text={'√'} Button1Func={()=>getSqrt()} Button2Text={'x!'} Button2Func={()=>getFactorial()} Button3Text={'%'} Button3Func={()=>operationfunction('percent','%')} Button4Text={'Sil'} Button4Func={() => DeleteLastNumber()} ></Keyboard>

        <Keyboard Button1Text={'1/x'} Button1Func={()=>getDivisionToOne()} Button2Text={'xʸ'} Button2Func={()=>operationfunction("pow","^")} Button3Text={'C'} Button3Func={() => ClearNumber()} Button4Text={'÷'} Button4Func={() => operationfunction('division','÷')} ></Keyboard>

        <Keyboard Button1Text={'7'} Button1Func={() => WriteNumber('7')} Button2Text={'8'} Button2Func={() => WriteNumber('8')} Button3Text={'9'} Button3Func={() => WriteNumber('9')} Button4Text={'X'} Button4Func={() => operationfunction('multiplication','X')} ></Keyboard>

        <Keyboard Button1Text={'4'} Button1Func={() => WriteNumber('4')} Button2Text={'5'} Button2Func={() => WriteNumber('5')} Button3Text={'6'} Button3Func={() => WriteNumber('6')} Button4Text={'+'} Button4Func={() => operationfunction('plus','+')} ></Keyboard>

        <Keyboard Button1Text={'1'} Button1Func={() => WriteNumber('1')} Button2Text={'2'} Button2Func={() => WriteNumber('2')} Button3Text={'3'} Button3Func={() => WriteNumber('3')} Button4Text={'-'} Button4Func={() => operationfunction('minus','-')}  ></Keyboard>

        <Keyboard Button1Text={'$'} Button1Func={()=>navigation.navigate('CurrencyScreen')} Button2Text={'0'} Button2Func={() => WriteNumber('0')} Button3Text={'.'} Button3Func={() => WriteNumber('.')} Button4Text={'='} Button4Func={()=>equals()} ></Keyboard>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d3849',
    flex: 1
  },

  CalculatorText: {
    marginTop: 50,
    marginLeft: 30,
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic'
  },

  Keyboard: {
    marginTop: 10
  }
});
