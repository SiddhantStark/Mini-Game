/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { ImageBackground } from 'react-native';
import StartScreen from './screens/StartScreen';


export default function App() {
  return (
    <LinearGradient 
    colors={['#4e0329', '#ddb52f']}
    style={styles.container}
    >
      <ImageBackground 
      source={require('./assets/background.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
      <StartScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});