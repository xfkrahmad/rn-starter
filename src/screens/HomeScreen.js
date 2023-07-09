import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToComponentsScreenHandler = () => {
    navigation.navigate('Components');
  };

  const goToListsScreenHandler = () => {
    navigation.navigate('List');
  };

  const goToImageScreenHandler = () => {
    navigation.navigate('Image');
  };

  const goToCounterScreenHandler = () => {
    navigation.navigate('Counter');
  };

  const goToColorScreenHandler = () => {
    navigation.navigate('Color');
  };

  const goToSquareScreenHandler = () => {
    navigation.navigate('Square');
  };

  const goToTextScreenHandler = () => {
    navigation.navigate('Text');
  };
  return (
    <View>
      <Text style={styles.text}>HomeScreens</Text>
      <Button
        title='Go to Components Demo'
        onPress={goToComponentsScreenHandler}
      />
      <Button title='Go to List Demo' onPress={goToListsScreenHandler} />
      <Button title='Go To Image Demo' onPress={goToImageScreenHandler} />
      <Button title='Go To Counter Demo' onPress={goToCounterScreenHandler} />
      <Button title='Go To Color Demo' onPress={goToColorScreenHandler} />
      <Button title='Go To Square Demo' onPress={goToSquareScreenHandler} />
      <Button title='Go To Text Demo' onPress={goToTextScreenHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
