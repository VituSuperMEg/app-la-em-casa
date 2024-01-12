import { TouchableOpacityProps } from "react-native";
import { Title } from "../../styles/styles";
import theme from "../../styles/theme";
import { ButtonContainer } from "./styles";

interface IButton extends TouchableOpacityProps {
  background : keyof typeof theme.colors;
  title : string;
}
export function Button ({
  background,
  title,
  ...rest
}:IButton) {
  return (
    <ButtonContainer background={background} {...rest}>
      <Title>
        {title}
      </Title>
    </ButtonContainer>
  )
}