import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Fikri';
  return (
    <View>
      <Text style={styles.headerTextStyle}>
        Getting Started with React Native
      </Text>
      <Text style={styles.nameTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45,
  },
  nameTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
