import React, { Component } from 'react';
import {
    StyleSheet, 
    Platform, 
    View, 
    Text,
} from 'react-native';

class SecondActivity extends Component {
    constructor(props) {
      super(props);
    }
     
    render()
    {
        return(
            <View style = { styles.MainContainer }>
            <Text style={{fontSize: 23}}> This is Activity - 2 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer :{
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        }
});

export default SecondActivity;