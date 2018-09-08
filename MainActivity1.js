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
    "filtername": "Job"
},{
    "id": 2,
    "filtername": "Skills"
},{
    "id": 3,
    "filtername": "Experience"
},{
    "id": 4,
    "filtername": "Location"
}];

const items = [{
    "id": 1,
    "job": "Software",
    "skill": ['coding','testing','reqiurement_analysis'],
    "experience":1,
    "location": "Delhi"
},{
    "id": 2,
    "job": "Web Development",
    "skill": ['coding','testing','reqiurement_analysis'],
    "experience":3,
    "location": "Pune"
},{
    "id": 3,
    "job": "App Development",
    "skill": ['Android','java','sdk', 'c++'],
    "experience":5,
    "location": "Bengaluru"
},{
    "id": 4,
    "job": "Android App Development",
    "skill": ['business process', 'outsourcing', 'operations', 'git'],
    "experience":5,
    "location": "Bengaluru"
},{
    "id": 5,
    "job": "Software developer",
    "skill": ['software development', 'software engineering', 'java', 'c++'],
    "experience":1,
    "location": "Chennai"
},{
    "id": 6,
    "job": "php developer",
    "skill": ['javascript', 'css', 'ajax', 'jquery', 'php'],
    "experience":3,
    "location": "Noida"
},{
    "id": 7,
    "job": "Software developer",
    "skill": ['Python', 'Ruby on Rails', 'software development'],
    "experience":2,
    "location": "Bengaluru"
},{
    "id": 8,
    "job": "Team lead: Server and Database",
    "skill": ['css', 'html', 'jquery', 'mysql', 'json', 'xml'],
    "experience":4,
    "location": "Delhi"
},{
    "id": 9,
    "job": "MS SQL DBA",
    "skill": ['sql dba', 'clustring', ],
    "experience":2,
    "location": "Noida"
},{
    "id": 10,
    "job": "Application Development",
    "skill": ['Linux', 'Hibernate', 'core java', 'shell scripting'],
    "experience":8,
    "location": "Pune"
},{
    "id": 11,
    "job": "Senior Software Developer",
    "skill": ['java', 'mysql', 'angular js', 'REST api','html5'],
    "experience":5,
    "location": "Chennai"
},{
    "id": 12,
    "job": "Software Test Engineer",
    "skill": ['test engineering', 'test planing', 'manual testing'],
    "experience":3,
    "location": "Chennai",
},{
    "id": 13,
    "job": "Quality Analyst",
    "skill": ['quality testing', 'selenium', 'DVB'],
    "experience":4,
    "location": "Bengaluru"
},{
    "id": 14,
    "job": "Software Testing",
    "skill": ['test planning', 'software testing', 'manual testing'],
    "experience":1,     
    "location": "Chennai"
},{
    "id": 15,
    "job": "Android App Development",
    "skill": ['test planning', 'software testing', 'manual testing'],
    "experience":4,
    "location": "Noida"
},{
    "id": 16,
    "job": "Android App Development",
    "skill": ['java', 'mysql', 'angular js', 'REST api','html5'],
    "experience":3,
    "location": "Noida"
},{
    "id": 17,
    "job": "Software Development",
    "skill": ['css', 'html', 'jquery', 'mysql', 'json', 'xml'],
    "experience":2,
    "location": "Bengaluru"
},{
    "id": 18,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":1,
    "location": "Delhi"
},{
    "id": 19,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":2,
    "location": "Noida"
},{
    "id": 20,
    "job": "Web Development",
    "skill": ['css', 'html', 'php', 'javascript'],
    "experience":3,
    "location": "Delhi"
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
    //   this.props.ScreenProps.key
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
        this.props.navigation.navigate('Filter4', {filterLocation :this.functionFoo})
        break;

    }
    } 

    functionFoo = () => {
        console.log("test");
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
