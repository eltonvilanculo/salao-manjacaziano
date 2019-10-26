import React, { useState, Component } from "react";
import Dialog from "react-native-dialog";
import Home from "./src/Home";
import DashboardActivity from "./src/DashboardActivity";
import ColabActivity from "./src/ColabActivity";
import ReportActivity from "./src/ReportActivity";
import ProfileActivity from "./src/ProfileActivity"
import { createStackNavigator } from "react-navigation-stack";
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { createAppContainer } from "react-navigation";

const App = () => {
  return <AppContainer></AppContainer>;
};
//Estas sao as telas que jobam dentro da app. 
const AppNavigation = createStackNavigator({
  home: Home,
  dashboard: DashboardActivity,
  colabactivity:ColabActivity,
  reportactivity:ReportActivity,
  profileactivity:ProfileActivity

});
const AppContainer = createAppContainer(AppNavigation);
export default App;