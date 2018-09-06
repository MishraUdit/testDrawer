import React, { Component } from 'react';
import { 
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import { Icon } from 'react-native-elements'

class MainActivity extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        PickerValueHolder : '',
        isSelected: false,
      }
    }

    componentDidMount() {
        return fetch('http://18.191.97.114/api/todos', { method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVjZjQ5Y2NiMGFjMzQ0YzIwMmE4MzJiNmMyNWViMTFmNmVlNDYwODUyOGRmNTU0MzRkZjU5MzE5YTYxMDY3MmQwYmIwNTRhZDg1NWUzNDljIn0.eyJhdWQiOiIyIiwianRpIjoiNWNmNDljY2IwYWMzNDRjMjAyYTgzMmI2YzI1ZWIxMWY2ZWU0NjA4NTI4ZGY1NTQzNGRmNTkzMTlhNjEwNjcyZDBiYjA1NGFkODU1ZTM0OWMiLCJpYXQiOjE1MzU5NzM1NTMsIm5iZiI6MTUzNTk3MzU1MywiZXhwIjoxNTY3NTA5NTUzLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.TML6vshKaq2Y4HzqoL1FO7xssoxtjB8l8jh58cmSELknkYHUfWJFx_8aRA3vkzlTDlolHdzceZMVF3lhjGebALgpDJKiaBnc9aBosvCfWSYnISmedbdrfZ9ucqSe5Dr8S1neFa0bLaqhXbrcSaZGspVTjZDYh93X7wk-QP6i53j1xsIbl-rpjI4i8kWXimcjUASQvT_HMP47iZ5lfixAICO88wtio60o63K-6QByr-huHi_359qGk87lKnJQAbeXuGw0gRZB7VKrAZ3HzQZe63RC8h6H_Fj_7dxtqfq2lTxWl2LNSSCe98tk6osNv6kZweRb2MT7tJ8jctpm625m_NFDL-KMg7Om0cvbOiGaVDrAIIHSGjVrIEGbXE2_hlqgECPulNvn18jux7L6KkwRPj43wxzRcZXtFw-teMGKR1Lg6WRq2UVrv2R78edDp2FO0g-f0WZA192CVQVSx5YWOvh7VBTU07sY8k2GaEHM3ntAg7GBm6mm5kOIdwr3AFLk3fPmq706BrpKoVpoSm0N5VWzfSEUIlrZ3NxiDXxbkEWkzeWB7HZZzZHqCpxPTXUrSD0Mpzm2RbEnyyy4gTfA44tjJtlG603KWSdmKJfDKXjHieLSfTP6sNXoNBIiKz_ApFYtqysjs-UQeNIgG4dgdFnCnJJjZ56523XtdlXgzGk'
        }})
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            }, function() {
              // In this block you can do something with new state.
            });
           console.log(JSON.stringify(responseJson));
          })
          .catch((error) => {
            console.error(error);
          });
      }

    GetFlatListItem (item) {
    var str = JSON.stringify(item)
    alert(str);
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
  
    render()
     {
        return(
           <View style = { styles.MainContainer }>
              <View style = {{flexDirection: 'row'}}>
                <FlatList
                    style = {{paddingBottom: 10}}
                    horizontal
                    data={ this.state.dataSource }
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this,  item.task)} > {item.task} </Text>}
                    keyExtractor={(item, index) => index}
                  />
              </View>
              <Card
                containerStyle = {{width: '100%', margin: 0, padding: 0}}
              >
                <Text style={{marginTop: 10, marginLeft: 10, fontSize: 20, fontWeight: '900',  width: '70%'}}>
                  Android Developer
                </Text>
                <Text style={{marginLeft: 10, marginTop: 2, fontSize: 12, fontWeight: '500', width: '70%'}}>
                  Company name here
                </Text>
                <View style = {{flexDirection: 'row', width: '70%', marginLeft: 10, marginTop: 2, }}>
                  <Text style={{fontSize: 12, fontWeight: '200', width: '40%', margin: 1, }}>2-3 yrs</Text>
                  <Text style={{fontSize: 12, fontWeight: '200', width: '55%', margin: 1, textAlign: 'center',}}>location here</Text>
                </View>
                <View style = {{width: '100%', height: 1, marginTop: 100, backgroundColor: 'red'}}></View>
                <View style = {{flexDirection: 'row', height: 50}}>
                <TouchableOpacity onPress={this._onPressStarIcon}>
                    <Icon
                      reverse
                      name={this.state.isSelected ? 'star' : 'star-outlined'}
                      type='entypo'
                      color='blue'
                      size= {15}
                    />
                 
                </TouchableOpacity>
                </View>
              </Card>
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
