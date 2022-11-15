import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  BorderWrapper,
  LabelStyles,
  ViewStyles,
  Input,
  TextPx,
  InputBox,
} from './styled';

const Border = props => {
  return (
    <BorderWrapper>
      <LabelStyles>{'Border'}</LabelStyles>
      <ViewStyles>
        <DropDownPicker
          dropDownDirection="DEFAULT"
          open={props.borderShow}
          value={props.borderValue}
          items={props.borderItems}
          setOpen={props.setBorderShow}
          setValue={props.setBorderValue}
          setItems={props.setBorderItems}
          placeholder="Select..."
          style={styles.borderDropdown}
          containerStyle={{width: props.borderValue === 'yes' ? '35%' : '40%'}}
          dropDownContainerStyle={styles.borderDropdown}
          listMode="SCROLLVIEW"
        />
        {props.borderValue === 'yes' && (
          <>
            <DropDownPicker
              dropDownDirection="DEFAULT"
              open={props.methodShow}
              value={props.valueMethod}
              items={props.itemsMethod}
              setOpen={props.setMethodShow}
              setValue={props.setValueMethod}
              setItems={props.setItemsMethod}
              placeholder="Select..."
              style={styles.borderDropdown}
              containerStyle={{width: props.value === 'yes' ? '35%' : '40%'}}
              dropDownContainerStyle={styles.borderDropdown}
              listMode="SCROLLVIEW"
            />
            <InputBox>
              <Input
                value={props.borderWidth}
                onChangeText={text => props.setBorderWidth(text)}
              />
              <TextPx>px</TextPx>
            </InputBox>
          </>
        )}
      </ViewStyles>
    </BorderWrapper>
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
export default Border;
