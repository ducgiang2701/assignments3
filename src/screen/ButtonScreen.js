import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {BodyContainer} from '../styles/styles';
import {
  HeaderContainer,
  TitleHeader,
  TextCreateHeader,
} from '../styles/headerStyles';
import {SafeAreaViewStyles} from '../styles/styles';

import StyledTexyInput from '../components/Input/StyledTextInput';

const ButtonScreen = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#FFF');
  const [backgroudColor, setBackgroudColor] = useState('#CB2E2E');

  return (
    <SafeAreaViewStyles>
      <HeaderContainer>
        <TitleHeader>{'Button Settings'}</TitleHeader>
        <TouchableOpacity>
          <TextCreateHeader>{'Create'}</TextCreateHeader>
        </TouchableOpacity>
      </HeaderContainer>
      <BodyContainer>
        <StyledTexyInput
          lable={'Button text'}
          value={text}
          // eslint-disable-next-line no-shadow
          onChangeText={text => setText(text)}
          placeholder={'I am Button'}
        />
        <StyledTexyInput
          lable={'Button text color'}
          value={color}
          // eslint-disable-next-line no-shadow
          onChangeText={color => setColor(color)}
        />
        <StyledTexyInput
          lable={'Button text color'}
          value={backgroudColor}
          // eslint-disable-next-line no-shadow
          onChangeText={bgColor => setBackgroudColor(bgColor)}
        />
      </BodyContainer>
    </SafeAreaViewStyles>
  );
};

export default ButtonScreen;
