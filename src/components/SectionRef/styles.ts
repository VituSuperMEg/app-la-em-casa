import styled from "styled-components/native";
import theme from "../../styles/theme";

export const RefContainer = styled.TouchableOpacity`
  background: ${theme.colors.yellow};
  width: 100%;
  height: 90px;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const End = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top : 25px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;
