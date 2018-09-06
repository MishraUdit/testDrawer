import React, { Component } from 'react';
import { 
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  Modal,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Slider } from 'react-native-elements';

class Filter4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : 0,
        }
    }

    render(){
        return(
            <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
                <Slider
                    value={this.state.value}
                    onValueChange={(value) => this.setState({value})}
                    maximumValue = {5000} />
                <Text>Distance (in meters): {this.state.value}</Text>
                </View>
              </View>
            </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer :{
        
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,        
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        
        },   
})

export default Filter4;