import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import store from './store';

import Navigation from './navigation/Navigation';
import store from './store';
import Container from './navigation/Container';
export default function App() {

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
