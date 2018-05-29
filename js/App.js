import React, { Component } from "react";
import { View, Text } from "react-native";
import About from "./screens/About";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          <Text>
            <About />
          </Text>
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
