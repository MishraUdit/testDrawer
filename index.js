/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigatorDrawer from './NavigatorDrawer';
import FilterFunctionCalled from './FilterFunctionCalled';

AppRegistry.registerComponent(appName, () => NavigatorDrawer);
