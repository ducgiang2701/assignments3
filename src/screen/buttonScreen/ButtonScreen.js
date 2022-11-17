import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {
  TitleHeader,
  TextCreateHeader,
  HeaderContainer,
  BodyContainer,
  Container,
  Footer,
  SafeAreaViewStyles,
  TextResult,
} from '../buttonScreen/styles';
import {
  Border,
  ButtomHeight,
  ButtonWidth,
  MyButton,
  StyledTextInput,
} from '../../components';
import {useDispatch} from 'react-redux';
import createButtonSlice from '../../redux/slice /createButtonSlice';
import uuid from 'react-native-uuid';

const ButtonScreen = () => {
  const [text, setText] = useState('');
  const [colorText, setColorText] = useState('#FFF');
  const [backgroudColor, setBackgroudColor] = useState('#CB2E2E');
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderDash, setBorderDash] = useState('');

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
      setText(''),
      setBorderValue(''),
      setValueMethod(''),
      setbButtonHeightValue(null),
      setButtonWidthValue(null),
      setButtonHeightTextPx(0),
      setButtonWidthTextPx(0),
      setBorderRadius(0),
    );
  };

  return (
    <Container>
      <SafeAreaViewStyles>
        <ScrollView>
          <HeaderContainer>
            <TitleHeader>{'Button Settings'}</TitleHeader>
            <TouchableOpacity onPress={handleCreateButton}>
              <TextCreateHeader>{'Create'}</TextCreateHeader>
            </TouchableOpacity>
          </HeaderContainer>

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
          </Footer>
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
                value={borderDash}
                // eslint-disable-next-line no-shadow
                onChangeText={text => setBorderDash(text)}
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
        </ScrollView>
      </SafeAreaViewStyles>
    </Container>
  );
};

export default ButtonScreen;
