import styled from "styled-components/native";
import theme from "../../styles/theme";

export const RefContent = styled.View`
  margin-top: 50px;
  max-height: 100%;
  flex: 1;
`;
export const RefScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const RefImage = styled.Image`
  width: 100%;
  height: 250px;
`;
export const RefTitle = styled.View`
  margin-top: 40px;
`;
export const RefCardCompletion = styled.View``;
export const RefCompletion = styled.View`
  background: ${theme.colors.yellow};
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
  justify-content: center;
`;
export const RefCheckbox = styled.TouchableOpacity`
  background: ${theme.colors.yellowLight};
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-radius: 6px;
  justify-content: center;
  padding-left: 10px;
`;
export const RefCart = styled.View`
  margin: 15px 0;
`;
