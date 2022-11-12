import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  margin-bottom: 18px;
`;
export const LabelStyles = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const Input = styled.TextInput`
  width: 90%;
  padding: 12px 0px 12px 18px;
`;
export const InputTextWrapper = styled.View`
  border: 1px solid #d9d9d9;
  flex-direction: row;
  align-items: center;
`;
export const Color = styled.View`
  height: 18px;
  width: 18px;
  background-color: ${props => props.value};
  border: ${props =>
    props.value === '#FFF' || props.value === '#fff' || props.value === 'white'
      ? '1px'
      : '0px'};
`;
