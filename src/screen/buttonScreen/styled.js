import styled from 'styled-components';
export const Container = styled.View`
  flex: 1;
  background-color: white;
`;
export const SafeAreaViewStyles = styled.SafeAreaView`
  flex: 1;
`;
export const HeaderContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleHeader = styled.Text`
  font-size: 35px;
  font-weight: 400;
`;
export const TextCreateHeader = styled.Text`
  font-weight: 400;
  font-size: 18px;
`;
export const BodyContainer = styled.View`
  margin: 20px 30px 0px 30px;
`;
export const ResultWrapper = styled.View`
  background-color: #f1f1f1;
  padding: 18px 30px 18px 30px;
  align-items: center;
  justify-items: center;
  margin: 28px 0px;
`;
export const TextResult = styled.Text`
  font-size: 16px;
  color: #000000;
  opacity: 0.5;
`;
