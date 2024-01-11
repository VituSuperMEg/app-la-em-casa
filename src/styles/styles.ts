import styled from "styled-components/native";
import theme from "./theme";

interface IBox {
  background?: keyof typeof theme.colors; 
  row?: string;
  justity?: string;
  padding?: number;
  width?: number;
  height?: number;
  align?: string;
  margin?: number;
  position?: string;
  justify?: string;
  top?: number;
  zIndex?: number;
}
interface ITitle {
  color : keyof typeof theme.colors;
  padddinLeft?: number;
}
interface IBtn {
  background?: keyof typeof theme.colors; 
  padding?: number;
  disabled?: number;
}
interface IScroll {
  marginTop?: number;
}
export const Box = styled.View<IBox>`
  flex: 1;
  background-color: ${props => props.background ? theme.colors[props.background] : 'transparent'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'center'};
  padding: ${props => props.padding || 0}px;
  margin: ${props => props.margin || 0}px;
  align-items: ${props => props.align || 'center'};
  width: 100%;
  max-width: ${props => props.width || '100%'};
  max-height: ${props => props.height ? props.height + 'px' : 'auto'};
  position: ${props => props.position || 'relative'};
  top: ${props => props.top || 0}px;
  z-index: ${props => props.zIndex || 1};
`;
export const Title = styled.Text<ITitle>`
  font-size: 20px;
  padding-left: ${props => props.padddinLeft || 0}px;
  color: ${props => props.color ? theme.colors[props.color] : theme.colors.dark};
  font-weight: bold;
`;
export const Btn = styled.TouchableOpacity<IBtn>`
  padding: ${props => props.padding || 15}px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  background: ${props => props.background ? theme.colors[props.background] : 'transparent'};
`;
export const Scroll = styled.ScrollView<IScroll>`
  width: 100%;
  margin-top: ${props => props.marginTop || 0}px;
`;