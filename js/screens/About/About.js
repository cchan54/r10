import React from "react";
import { Text, ScrollView, View, Button } from "react-native";
import styles from "./styles";

const About = ({ nav }) => {
  return (
    <ScrollView>
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text>Code of Conduct</Text>
    </ScrollView>
  );
};

export default About;
