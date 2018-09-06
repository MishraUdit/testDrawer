import React, { Component } from 'react';
import { 
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  Modal,
  Slider
} from 'react-native';
import DataCardView from './DataCardView';

const filternames = [{
    "id": 1,
    "filtername": "Fruit Name"
},{
    "id": 2,
    "filtername": "Color"
},{
    "id": 3,
    "filtername": "Quantity"
},{
    "id": 4,
    "filtername": "Location"
},];

const items = [{
    "id": 1,
    "job": "Software",
    "skill": ['coding','testing','reqiurement_analysis'],
    "Experience":1,
    "location": "Delhi"
},{
    "id": 2,
    "fruit_name": "Apricot",
    "color": "orange",
    "quantity": "15",
    "location": "Bengaluru"
},{
    "id": 3,
    "fruit_name": "Avocado",
    "color": "green",
    "quantity": "20",
    "location": "Pune"
},{
    "id": 4,
    "fruit_name": "Banana",
    "color": "yellow",
    "quantity": "30",
    "location": "Noida"
},{
    "id": 5,
    "fruit_name": "Bilberry",
    "color": "red",
    "quantity": "10",
    "location": "Bengaluru"
},{
    "id": "6",
    "fruit_name": "Blackberry",
    "color": "red",
    "quantity": "15",
    "location": "Pune"
},{
    "id": 7,
    "fruit_name": "Blackcurrant",
    "color": "black",
    "quantity": "20",
    "location": "Delhi"
},{
    "id": 8,
    "fruit_name": "Blueberry",
    "color": "blue",
    "quantity": "30",
    "location": "Bengaluru"
},{
    "id": 9,
    "fruit_name": "Boysenberry",
    "color": "red",
    "quantity": "10",
    "location": "Delhi"
},{
    "id": 10,
    "fruit_name": "Cherry",
    "color": "red",
    "quantity": "15",
    "location": "Pune"
},{
    "id": 11,
    "fruit_name": "Cloudberry",
    "color": "orange",
    "quantity": "20",
    "location": "Delhi"
},{
    "id": 12,
    "fruit_name": "Coconut",
    "color": "brown",
    "quantity": "30",
    "location": "Noida"
},{
    "id": 13,
    "fruit_name": "Cranberry",
    "color": "black",
    "quantity": "10",
    "location": "Bengaluru"
},{
    "id": 14,
    "fruit_name": "Cucumber",
    "color": "green",
    "quantity": "15",
    "location": "Noida"
},{
    "id": 15,
    "fruit_name": "Dragonfruit",
    "color": "red",
    "quantity": "20",
    "location": "Pune"
},{
    "id": 16,
    "fruit_name": "Elderberry",
    "color": "blue",
    "quantity": "30",
    "location": "Pune"
},{
    "id": 17,
    "fruit_name": "Goji berry",
    "color": "red",
    "quantity": "10",
    "location": "Delhi"
},{
    "id": 18,
    "fruit_name": "Gooseberry",
    "color": "green",
    "quantity": "15",
    "location": "Noida"
},{
    "id": 19,
    "fruit_name": "Grape",
    "color": "green",
    "quantity": "20",
    "location": "Pune"
},{
    "id": 20,
    "fruit_name": "Guava",
    "color": "green",
    "quantity": "30",
    "location": "Delhi"
},{
    "id": 21,
    "fruit_name": "Honeyberry",
    "color": "blue",
    "quantity": "10",
    "location": "Noida"
},{
    "id": 22,
    "fruit_name": "Huckleberry",
    "color": "blue",
    "quantity": "15",
    "location": "Bengaluru"
},{
    "id": 23,
    "fruit_name": "Apple",
    "color": "green",
    "quantity": "40",
    "location": "Pune"
},{
    "id": 24,
    "fruit_name": "Apricot",
    "color": "orange",
    "quantity": "60",
    "location": "Delhi"
},{
    "id": 25,
    "fruit_name": "Avocado",
    "color": "green",
    "quantity": "100",
    "location": "Noida"
},{
    "id": 26,
    "fruit_name": "Banana",
    "color": "yellow",
    "quantity": "130",
    "location": "Bhuvneshver"
},{
    "id": 27,
    "fruit_name": "Bilberry",
    "color": "red",
    "quantity": "40",
    "location": "Bhuvneshver"
},{
    "id": 28,
    "fruit_name": "Blackberry",
    "color": "red",
    "quantity": "60",
    "location": "Bhuvneshver"
},{
    "id": 29,
    "fruit_name": "Blackcurrant",
    "color": "red",
    "quantity": "100",
    "location": "Delhi"
},{
    "id": 30,
    "fruit_name": "Blueberry",
    "color": "red",
    "quantity": "130",
    "location": "Bhuvneshver"
},{
    "id": 31,
    "fruit_name": "Boysenberry",
    "color": "blue",
    "quantity": "40",
    "location": "Bengaluru"
},{
    "id": 32,
    "fruit_name": "Cherry",
    "color": "red",
    "quantity": "60",
    "location": "Bhuvneshver"
},{
    "id": 33,
    "fruit_name": "Cloudberry",
    "color": "red",
    "quantity": "100",
    "location": "Delhi"
},{
    "id": 34,
    "fruit_name": "Coconut",
    "color": "red",
    "quantity": "130",
    "location": "Bhuvneshver"
},{
    "id": 35,
    "fruit_name": "Cranberry",
    "color": "red",
    "quantity": "40",
    "location": "Delhi"
},{
    "id": 36,
    "fruit_name": "Cucumber",
    "color": "red",
    "quantity": "60",
    "location": "Bhuvneshver"
},{
    "id": 37,
    "fruit_name": "Dragonfruit",
    "color": "red",
    "quantity": "100",
    "location": "Delhi"
},{
    "id": 38,
    "fruit_name": "Elderberry",
    "color": "black",
    "quantity": "130",
    "location": "Delhi"
},{
    "id": 39,
    "fruit_name": "Goji berry",
    "color": "red",
    "quantity": "40",
    "location": "Delhi"
},{
    "id": 40,
    "fruit_name": "Gooseberry",
    "color": "red",
    "quantity": "60",
    "location": "Delhi"
},{
    "id": 41,
    "fruit_name": "Grape",
    "color": "black",
    "quantity": "100",
    "location": "Bengaluru"
},{
    "id": 42,
    "fruit_name": "Guava",
    "color": "red",
    "quantity": "130",
    "location": "Bhuvneshver"
},{
    "id": 43,
    "fruit_name": "Honeyberry",
    "color": "blue",
    "quantity": "40",
    "location": "Delhi"
},{
    "id": 44,
    "fruit_name": "Huckleberry",
    "color": "red",
    "quantity": "60",
    "location": "Bhuvneshver"
}];

class MainActivity extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        PickerValueHolder : '',
        isSelected: false,
        modalVisible: false,
      }
    }

    GetFlatListItem (item) {
    var str = JSON.stringify(item)
    switch(str){
        case '1':
        this.props.navigation.navigate('Filter1')
        break;

        case '2':
        this.props.navigation.navigate('Filter2')
        break;

        case '3':
        this.props.navigation.navigate('Filter3')
        break;

        case '4':
        this.setModalVisible(true)
        break;

    }
    }      
 
 FlatListItemSeparator = () => {
     return (
       <View
         style={{
           margin: 5,
           backgroundColor: "#607D8B",

         }}
       />
     );
   }

   _onPressStarIcon = () => {
     if(this.state.isSelected != true){
      this.setState({isSelected: true})
     }
      else{
      this.setState({isSelected: false})

      } 
   }

   setModalVisible(visible) {
    this.setState({modalVisible: visible});

  }
  
    render()
     {
        return(
            <View>
           <View style = { styles.MainContainer }>
              <View style = {{flexDirection: 'row'}}>
                <FlatList
                    style = {{paddingBottom: 10}}
                    horizontal
                    data={ filternames }
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this,  item.id)} > {item.filtername} </Text>}
                    keyExtractor={(item, index) => index}
                  />
              </View>
              </View>
              <FlatList
                    style = {{paddingBottom: 10, marginBottom: 100}}
                    data={ items }
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) => <DataCardView data ={item}/>}
                    keyExtractor={(item, index) => index}
                  />
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(!this.state.modalVisible);
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
        );
     }
}

const styles = StyleSheet.create({
    MainContainer :{

        justifyContent: 'center',
        margin: 10,        
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        
        },
        FlatListItemStyle: {
            marginTop: 15,
            padding: 10,
            fontSize: 18,
            height: 44,
            width:  125,
            borderWidth: 1,
            backgroundColor: 'transparent'
          },
});
export default MainActivity;
