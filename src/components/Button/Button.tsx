import { Title } from "../../styles/styles";
import theme from "../../styles/theme";
import { ButtonContainer } from "./styles";

interface IButton {
  background : keyof typeof theme.colors;
  title : string;
}
export function Button ({
  background,
  title
}:IButton) {
  return (
    <ButtonContainer background={background}>
      <Title>
        {title}
      </Title>
    </ButtonContainer>
  )
}