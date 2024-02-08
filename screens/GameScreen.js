import {View, Text, StyleSheet, Alert} from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import {useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({useNumber}) {
  let minb = 1;
  let maxb = 100;
  const init = generateRandomBetween(minb, maxb, useNumber);
  const [currentGuess, setCurrentGuess] = useState(init);

  function nextGuessHandler(direction) {
    if((direction==='lower' && currentGuess<useNumber) || (direction==='upper' && currentGuess>useNumber)){
      Alert.alert("Don't lie!", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'},]);
      return;
    }

    if(direction==='lower'){
      maxb=currentGuess;
    }else{
      minb=currentGuess+1;
    }
    const newn=generateRandomBetween(minb, maxb, currentGuess);
    setCurrentGuess(newn);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}>
          +
        </PrimaryButton>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
