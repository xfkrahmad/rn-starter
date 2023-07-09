import { ReactNode } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  const { item } = props;
  return (
    <View>
      <Image source={item.imageUrl} />
      <Text>{item.name}</Text>
      <Text>Image Score - {item.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
