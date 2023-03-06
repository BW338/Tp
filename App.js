import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'
import HomeStack from './routes/homeStack';

export default function App() {

  return (
    <View style={styles.container}>
      <HomeStack></HomeStack> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});