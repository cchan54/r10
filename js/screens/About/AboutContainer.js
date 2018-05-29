import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component } from "react";
import { Text, ScrollView, Image, View, ActivityIndicator } from "react-native";
import styles from "./styles";
import About from "./About";

class AboutContainer extends Component {
  render() {
    return (
      <View>
        <View>
          {/* <ActivityIndicator size="large" color="skyblue" animating={true} /> */}
        </View>
        <About />
      </View>
    );
  }
}

export default AboutContainer;
