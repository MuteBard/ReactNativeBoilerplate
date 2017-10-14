import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/Test.actions';
import Img from '../components/Image'

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
                <Img src="https://cdn.discordapp.com/attachments/268197604494409729/367779237790482432/Bane_of_the_Brella.png"/>
                <Text>h i j</Text> 
            </View>
        )
    }
}

const FilterPageContainer = connect(
    state => state.test,
    actions
)(FilterPage);

export default FilterPageContainer