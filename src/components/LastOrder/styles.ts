import styled from "styled-components/native";
import theme from "../../styles/theme";

export const LastOrderContainer = styled.View`
 margin-top: 20px;
`;
export const LastOrderFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
 margin-bottom: 10px;
`;
export const LastOrderItem = styled.View`
  background: ${theme.colors.yellow};
  height:120px;
  margin-top: 20px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const LastOrderValues = styled.View`
  flex : 1;
`;
export const LastOrderButton = styled.View`
  height: 100%;
`;