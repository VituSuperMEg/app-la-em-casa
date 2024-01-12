import styled from "styled-components/native";
import theme from "./theme";

interface ITitle {
  color?: keyof typeof theme.colors;
  size?: number;
  paddingLeft?: number;
}
export const Container = styled.SafeAreaView`
  background: ${theme.colors.slate};
  padding: 20px 10px;
  flex : 1;
`;
export const Title = styled.Text<ITitle>`
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.dark};
  font-size: ${props => props.size || 16}px;
`;
