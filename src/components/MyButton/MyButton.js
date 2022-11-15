import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.buttonWrapper,
        width: props.valueWidth === 'dynamic' ? '90%' : props.width,
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        height: props.valueHeight === 'dynamic' ? 56 : props.height,
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        backgroundColor: props.backgroudColor,
      }}>
      <Text style={{...styles.TextStyles, color: props.color}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  TextStyles: {
    fontSize: 16,
  },
});

export default MyButton;
