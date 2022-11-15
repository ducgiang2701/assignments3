import React from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  ButtonWidthWrapper,
  LabelStyles,
  BoxDropdown,
  Input,
  InputBox,
  TextPx,
} from './styled';

const ButtonWidth = props => {
  return (
    <ButtonWidthWrapper>
      <LabelStyles>{props.lable}</LabelStyles>
      <BoxDropdown>
        <DropDownPicker
          open={props.buttonWidthShow}
          value={props.buttonWidthValue}
          items={props.itemsButtonWidth}
          setOpen={props.setButtonWidthShow}
          setValue={props.setButtonWidthValue}
          setItems={props.setItemsButtonWidth}
          placeholder="Select..."
          style={styles.borderDropdown}
          containerStyle={styles.containerStyle}
          dropDownContainerStyle={styles.borderDropdown}
          listMode="SCROLLVIEW"
        />
        {props.buttonWidthValue === 'fixed' && (
          <InputBox>
            <Input
              value={props.buttonWidthTextPx}
              onChangeText={text => {
                props.setButtonWidthTextPx(text);
              }}
            />
            <TextPx>px</TextPx>
          </InputBox>
        )}
      </BoxDropdown>
    </ButtonWidthWrapper>
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
export default ButtonWidth;
