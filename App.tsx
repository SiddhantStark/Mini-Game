/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';


export default function App() {
  return (
    <LinearGradient 
    colors={['#4e0329', '#ddb52f']}
    style={styles.container}
    >
      <StartScreen/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});