import { createDrawerNavigator } from 'react-navigation';
import FirstActivity_StackNavigator from './FirstActivity_StackNavigator';
import SecondActivity_StackNavigator from './SecondActivity_StackNavigator';
import ThirdActivity_StackNavigator from './ThirdActivity_StackNavigator';



  export default MyDrawerNavigator = createDrawerNavigator({
    MainStack: FirstActivity_StackNavigator,
    SecondStack: SecondActivity_StackNavigator,
    ThirdStack: ThirdActivity_StackNavigator
  });