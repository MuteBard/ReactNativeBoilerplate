import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './src/reducers/'
import Header from './src/components/Header'
import FilterPage from './src/pages/FilterPage'


export default App = () => {
    return (
      <Provider store={store}>
        <View>
          <Header headerText={'Please work'}/>
          <FilterPage/>
        </View>
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
