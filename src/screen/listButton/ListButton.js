import React from 'react';
import {useSelector} from 'react-redux';
import MyButton from '../../components/MyButton/MyButton';
import {Container} from './styles';

const ListButtons = () => {
  const listButton = useSelector(state => state.createButtonSlice);
  return (
    <Container>
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
    </Container>
  );
};

export default ListButtons;
