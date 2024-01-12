import { TouchableOpacityProps } from "react-native";
import { Title } from "../../styles/styles";
import theme from "../../styles/theme";
import { ButtonContainer } from "./styles";

interface IButton extends TouchableOpacityProps {
  background?: keyof typeof theme.colors;
  title : string;
  color?: keyof typeof theme.colors;
  size? : number;
  height? : number;
}
export function Button ({
  background,
  title,
  color,
  size,
  height,
  ...rest
}:IButton) {
  return (
    <ButtonContainer background={background} height={height} {...rest}>
      <Title color={color} size={size}>
        {title}
      </Title>
    </ButtonContainer>
  )
}