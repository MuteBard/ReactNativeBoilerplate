import React, {Component} from 'react';
import { View, Image } from 'react-native';

class Img extends Component{
    render(){
        const styles = {
            thumbnailStyle:{
              height : 50,
              width : 50
            }//,
            // thumbnailContainerStyle:{
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   marginLeft: 10,
            //   marginRight: 10
            // },
            // imageStyle:{
            //   height: 300,
            //   flex: 1,
            //   width : null
            // }
          };
        let {src}= this.props
        const { thumbnailStyle } = styles;
        return(
            <View>
                <Image 
                    style={thumbnailStyle} 
                    source={{uri:src}}
                />
            </View>
        )
    }
}

export default Img