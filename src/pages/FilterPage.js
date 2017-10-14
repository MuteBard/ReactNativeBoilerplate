import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/Test.actions';

class FilterPage extends Component{



    componentWillMount(){
        this.props.testing()
    }


    renderFilters(){
        let arr = ['d', 'e', 'f', 'g']
        return arr.map((elem, idx) => 
             <Text key={idx}>{elem}</Text>
        );
       
    }
    
    render(){
        return(
            <View>
                <Text>a b c</Text>  
                {this.renderFilters()} 
                <Text>{this.props.test}</Text> 
            </View>
        )
    }
}

const FilterPageContainer = connect(
    state => state.test,
    actions
)(FilterPage);

export default FilterPageContainer