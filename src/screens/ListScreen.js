import { View, Text, StyleSheet, FlatList } from 'react-native';
import { friends } from '../data';

const ScreensListScreen = () => {
  return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ScreensListScreen;
