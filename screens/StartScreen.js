import {Alert, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function StartScreen() {

  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredNumber){
    setEnteredNumber(enteredNumber);
  }

  function resetInput(){
    setEnteredNumber('');
  }

  function inputChecker(){
    const chosenNumber = parseInt(enteredNumber);
     if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
       Alert.alert('Invalid Number',
        'The number has to be between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInput}])
     }
  }
   
  return (
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.numberInput}  
      maxLength={2}
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect={false}
      value={enteredNumber}
      onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.buttons}>
      <PrimaryButton onEnter={resetInput}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttons}>
      <PrimaryButton onEnter={inputChecker}>Confirm</PrimaryButton>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 19,
        shadowColor: 'black',
        shadowOffset: {
            width: 8,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 60,
        width: 60,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        fontSize: 32,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    buttons:{
      flex: 1,
    }
});
