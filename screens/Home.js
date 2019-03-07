import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import UserTab from "./Dashboard/Tabs/UserTab";
import AddTab from "./Dashboard/Tabs/AddTab";
import StatsTab from "./Dashboard/Tabs/StatsTab";
import StoriesTab from "./Dashboard/Tabs/StoriesTab";

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <TouchableOpacity
          raised
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text>Get Started!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    User: { screen: UserTab },
    Add: { screen: AddTab },
    Stats: { screen: StatsTab },
    Stories: { screen: StoriesTab }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#ffffff",
      activeBackgroundColor: "#D70026",
      inactiveTintColor: "#a9a9a9",
      inactiveBackgroundColor: "#D70026"
    }
  }
);

export default createAppContainer(TabNavigator);

//export default Home;
