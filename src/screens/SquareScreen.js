import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);
//   console.log(red, green, blue);
//   const checkChange = (color, action) => {
//     const NUMBER = 5;
//     switch (color) {
//       case 'red':
//         action == 'increase'
//           ? red + NUMBER <= 255 && setRed(red + NUMBER)
//           : red - NUMBER >= 0 && setRed(red - NUMBER);
//         break;
//       case 'green':
//         action == 'increase'
//           ? green + NUMBER <= 255 && setGreen(green + NUMBER)
//           : green - NUMBER >= 0 && setGreen(green - NUMBER);
//         break;
//       case 'blue':
//         action == 'increase'
//           ? blue + NUMBER <= 255 && setBlue(blue + NUMBER)
//           : blue - NUMBER >= 0 && setBlue(blue - NUMBER);
//     }
//   };

//   return (
//     <View>
//       <ColorCounter
//         color='Red'
//         increasingHandler={() => checkChange('red', 'increase')}
//         decreasingHandler={() => checkChange('red', 'decrease')}
//       />
//       <ColorCounter
//         color='Green'
//         increasingHandler={() => checkChange('green', 'increase')}
//         decreasingHandler={() => checkChange('green', 'decrease')}
//       />
//       <ColorCounter
//         color='Blue'
//         increasingHandler={() => checkChange('blue', 'increase')}
//         decreasingHandler={() => checkChange('blue', 'decrease')}
//       />
//       <View
//         style={{
//           height: 100,
//           width: 100,
//           backgroundColor: `rgb(${red}, ${green}, ${blue})`,
//         }}
//       />
//     </View>
//   );
// };

const NUMBER = 5;
const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  //state === {red,green,blue}
  // action === {type, payload}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, initialState);
  console.log(red);
  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => dispatch({ type: 'change_red', payload: NUMBER })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -NUMBER })}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({ type: 'change_green', payload: NUMBER })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -NUMBER })}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({ type: 'change_blue', payload: NUMBER })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -NUMBER })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
