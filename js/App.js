import React, { Component } from "react";
import { View, Text } from "react-native";
import About from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import createStackNavigator from "./navigation/RootStackNavigator";
import RootStackNavigator from "./navigation/RootStackNavigator";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
