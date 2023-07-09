import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  console.log(name);
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {name && name.length < 5 && (
        <Text>Your password must be longer than 5 Characters</Text>
      )}
      {name && <Text>Your password is : {name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    padding: 10,
  },
});

export default TextScreen;
