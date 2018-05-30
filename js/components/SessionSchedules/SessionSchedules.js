import React from "react";
import { View, Text, SectionList, TouchableHighlight } from "react-native";

export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

export default SessionSchedules;
