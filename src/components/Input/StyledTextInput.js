import React from 'react';
import {
  Input,
  InputWrapper,
  LabelStyles,
  InputTextWrapper,
  Color,
} from './styled';

const StyledTexyInput = props => {
  return (
    <InputWrapper>
      <LabelStyles>{props.lable}</LabelStyles>
      <InputTextWrapper>
        <Input {...props} />
        {props.lable?.includes('color') && <Color value={props.value} />}
      </InputTextWrapper>
    </InputWrapper>
  );
};

export default StyledTexyInput;
