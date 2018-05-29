import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AboutContainer from "../screens/About";
import ScheduleContainer from "../screens/Schedule";

import Ionicons from "react-native-vector-icons/Ionicons";
import shareNavigationOptions from "./config";

const aboutStack = createStackNavigator({
  About: AboutContainer
});

const scheduleStack = createStackNavigator({
  Schedule: ScheduleContainer
});

export default createBottomTabNavigator(
  {
    About: aboutStack,
    Schedule: scheduleStack
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === "About") {
    //       iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    //     } else if (routeName === "Schedule") {
    //       iconName = `ios-home${focused ? "" : "-outline"}`;
    //     }
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   }
    // }),

    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10
        // fontFamily: "Monte"
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
