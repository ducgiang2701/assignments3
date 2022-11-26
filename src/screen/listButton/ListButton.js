import React, {Fragment, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Search} from '../../components';
import MyButton from '../../components/MyButton/MyButton';
import {Container} from './styled';

const ListButtons = () => {
  const listButton = useSelector(state => state.createButtonSlice);
  const [listData, setListData] = useState([]);
  const [filterDataFuncion, setFilterDataFuncion] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setListData(listButton);
    setFilterDataFuncion(listData);
  }, [listButton, listData]);

  // eslint-disable-next-line no-shadow
  const searchFilterFunction = text => {
    if (text) {
      const newListData = listData.filter(item => {
        const itemData = item.text
          ? item.text?.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterDataFuncion(newListData);
      setText(text);
    } else {
      setFilterDataFuncion(listData);
      setText(text);
    }
  };

  // filter
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Text', value: 'text'},
    {label: 'Text Color', value: 'text color'},
    {label: 'Background Color', value: 'background color'},
    {label: 'Width', value: 'width'},
    {label: 'Height', value: 'height'},
    {label: 'Border Width', value: 'border width'},
    {label: 'Border Radius', value: 'border radius'},
    {label: 'Border Color', value: 'border color'},
  ]);

  console.log();
  return (
    <Fragment>
      <Search
        text={text}
        // eslint-disable-next-line no-shadow
        searchFilterFunction={text => searchFilterFunction(text)}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      {filterDataFuncion.length === 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>{'There is no buton to show'}</Text>
        </View>
      ) : (
        <Container>
          {filterDataFuncion.map(item => {
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
        </Container>
      )}
    </Fragment>
  );
};

export default ListButtons;
