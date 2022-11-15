import React from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  ButtonWrapper,
  LabelStyles,
  BoxButtonWidth,
  Input,
  InputBox,
  TextPx,
} from './styled';

const ButtomHeight = props => {
  return (
    <ButtonWrapper>
      <LabelStyles>{'Button Height'}</LabelStyles>
      <BoxButtonWidth>
        <DropDownPicker
          dropDownDirection="DEFAULT"
          open={props.buttonHeightShow}
          value={props.buttonHeightValue}
          items={props.itemsButtonHeight}
          setOpen={props.setButtonHeightShow}
          setValue={props.setbButtonHeightValue}
          setItems={props.setItemsButtonHeight}
          placeholder="Select..."
          style={styles.borderDropdown}
          containerStyle={styles.containerStyle}
          dropDownContainerStyle={styles.borderDropdown}
          listMode="SCROLLVIEW"
        />
        {props.buttonHeightValue === 'fixed' && (
          <InputBox>
            <Input
              value={props.buttonHeightTextPx}
              onChangeText={text => props.setButtonHeightTextPx(text)}
            />
            <TextPx>px</TextPx>
          </InputBox>
        )}
      </BoxButtonWidth>
    </ButtonWrapper>
  );
};

const styles = StyleSheet.create({
  borderDropdown: {
    borderRadius: 0,
    borderColor: '#d9d9d9',
  },
  containerStyle: {
    width: '40%',
  },
});

export default ButtomHeight;
