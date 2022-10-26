import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BillingScreen from "./screens/BillingScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import MoreScreen from "./screens/MoreScreen";
import SupportScreen from "./screens/SupportScreen";

import Header from "./screens/Header";
//Screen names
const homeName = "Home";
const detailsName = "Account";
const settingsName = "Support";
const billingName = "Billing";
const moreName = "More";
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home";
            } else if (rn === billingName) {
              iconName = focused ? "insert-drive-file" : "insert-drive-file";
            } else if (rn === detailsName) {
              iconName = focused ? "account-circle" : "account-circle";
            } else if (rn === settingsName) {
              iconName = focused ? "headset" : "headset";
            } else if (rn === moreName) {
              iconName = focused ? "more-vert" : "more-vert";
            }

            // You can return any component that you like here!
            return (
              <>
                <Icon name={iconName} size={size} color={color} />
              </>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "green",
          inactiveTintColor: "black",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={billingName} component={BillingScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SupportScreen} />
        <Tab.Screen name={moreName} component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
