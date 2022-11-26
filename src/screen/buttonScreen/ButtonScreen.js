import React, {Fragment, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  TitleHeader,
  TextCreateHeader,
  HeaderContainer,
  BodyContainer,
  Container,
  ResultWrapper,
  SafeAreaViewStyles,
  TextResult,
} from './styled';
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

  // list method
  const listMethod = [
    {id: 1, title: 'Text'},
    {id: 2, title: 'Size'},
    {id: 3, title: 'Color'},
    {id: 4, title: 'Border'},
  ];

  const [value, setValue] = useState('Text');
  const ref = useRef(null);
  return (
    <Container>
      <SafeAreaViewStyles>
        <HeaderContainer>
          <TitleHeader>{'Button Settings'}</TitleHeader>
          <TouchableOpacity onPress={handleCreateButton}>
            <TextCreateHeader>{'Create'}</TextCreateHeader>
          </TouchableOpacity>
        </HeaderContainer>

        <ResultWrapper>
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
        </ResultWrapper>
        <View>
          <FlatList
            ref={ref}
            showsHorizontalScrollIndicator={false}
            data={listMethod}
            keyExtractor={(item, index) => item.id}
            getItemLayout={(data, index) => ({
              length: Dimensions.get('window').width / 3,
              offset: (Dimensions.get('window').width / 3) * index,
              index,
            })}
            horizontal
            snapToAlignment={'center'}
            snapToInterval={Dimensions.get('window').width / 3}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setValue(item.title);
                  ref.current.scrollToIndex({
                    index: index,
                    viewPosition: 0.5,
                  });
                }}
                style={styles.item}>
                <Text
                  style={[
                    styles.text,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {color: value === item.title ? '#0265FF' : null},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <ScrollView>
          <BodyContainer>
            {value === 'Text' || value === '' ? (
              <StyledTextInput
                lable={'Button text'}
                value={text}
                // eslint-disable-next-line no-shadow
                onChangeText={text => setText(text)}
                placeholder={'I am Button'}
              />
            ) : null}
            {value === 'Color' && (
              <Fragment>
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
                <StyledTextInput
                  lable={'Border color'}
                  value={borderColor}
                  onChangeText={bColor => setBorderColor(bColor)}
                />
              </Fragment>
            )}
            {value === 'Size' && (
              <Fragment>
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
              </Fragment>
            )}

            {value === 'Border' && (
              <Fragment>
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
              </Fragment>
            )}
          </BodyContainer>
        </ScrollView>
      </SafeAreaViewStyles>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 40,
    marginRight: 20,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ButtonScreen;
