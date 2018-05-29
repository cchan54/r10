import React from "react";
import { Text, ScrollView, View } from "react-native";
import styles from "./styles";

const About = () => {
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
      {/* {data.map(item => {
        return (
          // <Conducts
          //   key={key++}
          //   title={item.title}
          //   description={item.description}
          // />
        );
      })} */}
    </ScrollView>
  );
};

export default About;
