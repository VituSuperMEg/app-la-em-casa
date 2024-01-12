import styled from "styled-components/native";
import theme from "../../styles/theme";

export const FoodContainer = styled.View`
  gap : 10px;
  margin-top: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const FoodContent = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  background: ${theme.colors.yellow};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const FoodImg = styled.Image`
  width: 100px;
  height: 80px;
`;