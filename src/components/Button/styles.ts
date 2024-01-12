import styled from "styled-components/native";
import theme from "../../styles/theme";

interface IStyles {
  background?: keyof typeof theme.colors;
  height?: number;
}
export const ButtonContainer = styled.TouchableOpacity<IStyles>`
  background: ${props => props.background ? theme.colors[props.background] : 'transparent'};
  padding: 5px;
  border-radius: 4px;
  height: ${props => props.height ? props.height + "px" : "auto"};
  justify-content: center;
  align-items: center;
`;