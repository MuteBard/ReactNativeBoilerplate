import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/Test.actions';

import CardSection from '../components/CardSection';
import Card from '../components/Card';


class UseFilters extends Component{
  // renderFilters(){
  //   let arr = ['a', 'b', 'c']
  //   return arr.map((elem, idx) => 
  //     <Text key={idx}>{elem}</Text>
  //   );
  // }
  // {this.renderFilters()}
  render(){
    return(
      <View>
         <Text>a b c</Text>
      </View>
    )
  }
}


// const UseFiltersContainer = connect(
//   state => state.test,
//   actions
// )(UserFilters);

export default UseFilters

// import {React, Component} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import store from './src/reducers/'
// import Header from './src/components/Header'

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Header/>
//         <UseFilters/>
//       </Provider> 
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
