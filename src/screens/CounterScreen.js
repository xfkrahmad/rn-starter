import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return state.counter == 0
        ? state
        : { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({ type: 'decrease', payload: 1 })}
      />
      <Text>Curent Count : {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
