import styled from "styled-components/native";
import theme from "../../styles/theme";

export const RefContainer = styled.TouchableOpacity`
  background: ${theme.colors.yellow};
  width: 200px;
  height: 150px;
  border-radius: 6px;
  justify-content: center;
  padding: 20px;
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
