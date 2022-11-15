import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {BodyContainer} from '../styles/styles';
import {
  HeaderContainer,
  TitleHeader,
  TextCreateHeader,
} from '../styles/headerStyles';
import {SafeAreaViewStyles} from '../styles/styles';

import StyledTextInput from '../components/Input/StyledTextInput';
import ButtonWidth from '../components/Selection/ButtonWidth';
import ButtomHeight from '../components/ButtonHeight/ButtonHeight';
import Border from '../components/Border/Border';
import {Footer, TextResult} from '../styles/footerStyle';
import MyButton from '../components/MyButton/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import createButtonSlice from '../redux/slice /createButtonSlice';
import uuid from 'react-native-uuid';

const ButtonScreen = () => {
  const [text, setText] = useState('');
  const [colorText, setColorText] = useState('#FFF');
  const [backgroudColor, setBackgroudColor] = useState('#CB2E2E');
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderRadius, setBorderRadius] = useState(0);

  //Width
  const [buttonWidthShow, setButtonWidthShow] = useState(false);
  const [buttonWidthValue, setButtonWidthValue] = useState(null);
  const [itemsButtonWidth, setItemsButtonWidth] = useState([
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ]);
  const [buttonWidthTextPx, setButtonWidthTextPx] = useState(0);
  //Height
  const [buttonHeightShow, setButtonHeightShow] = useState(false);
  const [buttonHeightValue, setbButtonHeightValue] = useState(null);
  const [itemsButtonHeight, setItemsButtonHeight] = useState([
    {label: 'Dynamic', value: 'dynamic'},
    {label: 'Fixed', value: 'fixed'},
  ]);
  const [buttonHeightTextPx, setButtonHeightTextPx] = useState(0);
  //Border
  const [borderShow, setBorderShow] = useState(false);
  const [borderValue, setBorderValue] = useState('');
  const [borderItems, setBorderItems] = useState([
    {label: 'No', value: 'no'},
    {label: 'Yes', value: 'yes'},
  ]);

  //method Border
  const [methodShow, setMethodShow] = useState(false);
  const [valueMethod, setValueMethod] = useState('');
  const [itemsMethod, setItemsMethod] = useState([
    {label: 'Dashed', value: 'dashed'},
    {label: 'Solid', value: 'solid'},
  ]);
  // use redux
  const listButton = useSelector(state => state.createButtonSlice);
  const dispatch = useDispatch();
  const handleCreateButton = () => {
    dispatch(
      createButtonSlice.actions.addButton({
        id: uuid.v4(),
        text: text,
        color: colorText,
        backgroudColor: backgroudColor,
        valueWidth: buttonWidthValue,
        valueHeight: buttonHeightValue,
        width:
          buttonWidthValue === 'dynamic'
            ? '90%'
            : Math.floor(buttonWidthTextPx),
        height:
          buttonHeightValue === 'dynamic' ? 56 : Math.floor(buttonHeightTextPx),
        borderStyle: valueMethod,
        borderWidth: Math.floor(borderWidth),
        borderRadius: borderRadius,
        borderColor: borderColor,
      }),
    );
  };

  return (
    <SafeAreaViewStyles>
      <ScrollView>
        <HeaderContainer>
          <TitleHeader>{'Button Settings'}</TitleHeader>
          <TouchableOpacity onPress={handleCreateButton}>
            <TextCreateHeader>{'Create'}</TextCreateHeader>
          </TouchableOpacity>
        </HeaderContainer>

        <BodyContainer>
          <StyledTextInput
            lable={'Button text'}
            value={text}
            // eslint-disable-next-line no-shadow
            onChangeText={text => setText(text)}
            placeholder={'I am Button'}
          />
          <StyledTextInput
            lable={'Button text color'}
            value={colorText}
            onChangeText={color => setColorText(color)}
          />
          <StyledTextInput
            lable={'Background color'}
            value={backgroudColor}
            // eslint-disable-next-line no-shadow
            onChangeText={text => setBackgroudColor(text)}
          />
          <ButtonWidth
            lable="Button width"
            buttonWidthShow={buttonWidthShow}
            setButtonWidthShow={setButtonWidthShow}
            buttonWidthValue={buttonWidthValue}
            setButtonWidthValue={setButtonWidthValue}
            itemsButtonWidth={itemsButtonWidth}
            setItemsButtonWidth={setItemsButtonWidth}
            buttonWidthTextPx={buttonWidthTextPx}
            setButtonWidthTextPx={setButtonWidthTextPx}
          />
          <ButtomHeight
            lable="Button height"
            buttonHeightShow={buttonHeightShow}
            setButtonHeightShow={setButtonHeightShow}
            buttonHeightValue={buttonHeightValue}
            setbButtonHeightValue={setbButtonHeightValue}
            itemsButtonHeight={itemsButtonHeight}
            setItemsButtonHeight={setItemsButtonHeight}
            buttonHeightTextPx={buttonHeightTextPx}
            setButtonHeightTextPx={setButtonHeightTextPx}
          />
          <Border
            lable="Border"
            borderShow={borderShow}
            borderValue={borderValue}
            borderItems={borderItems}
            setBorderShow={setBorderShow}
            setBorderValue={setBorderValue}
            setBorderItems={setBorderItems}
            //method
            methodShow={methodShow}
            setMethodShow={setMethodShow}
            valueMethod={valueMethod}
            setValueMethod={setValueMethod}
            itemsMethod={itemsMethod}
            setItemsMethod={setItemsMethod}
            //text input border width
            borderWidth={borderWidth}
            setBorderWidth={setBorderWidth}
          />
          {valueMethod === 'dashed' && (
            <StyledTextInput
              lable={'Border Dash pattern'}
              value={text}
              // eslint-disable-next-line no-shadow
              onChangeText={text => setText(text)}
              placeholder={'I am Button'}
            />
          )}
          <StyledTextInput
            lable={'BorderRadius'}
            value={borderRadius}
            onChangeText={bRadius => setBorderRadius(bRadius)}
          />
          <StyledTextInput
            lable={'Border color'}
            value={borderColor}
            onChangeText={bColor => setBorderColor(bColor)}
          />
        </BodyContainer>
        <Footer>
          <TextResult>{'Result'}</TextResult>
          <MyButton
            text={text}
            color={colorText}
            backgroudColor={backgroudColor}
            valueWidth={buttonWidthValue}
            valueHeight={buttonHeightValue}
            width={Math.floor(buttonWidthTextPx)}
            height={Math.floor(buttonHeightTextPx)}
            borderStyle={valueMethod}
            borderWidth={Math.floor(borderWidth)}
            borderRadius={Math.floor(borderRadius)}
            borderColor={borderColor}
          />
          {listButton.map(item => {
            return (
              <MyButton
                key={item.id}
                text={item.text}
                color={item.colorText}
                backgroudColor={item.backgroudColor}
                valueWidth={item.buttonWidthValue}
                valueHeight={item.buttonHeightValue}
                width={item.width}
                height={item.height}
                borderStyle={item.borderStyle}
                borderWidth={Math.floor(item.borderWidth)}
                borderRadius={Math.floor(item.borderRadius)}
                borderColor={item.borderColor}
              />
            );
          })}
        </Footer>
      </ScrollView>
    </SafeAreaViewStyles>
  );
};

export default ButtonScreen;
