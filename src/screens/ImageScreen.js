import { ReactNode } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fakeData } from '../data';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => <ImageDetail item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
