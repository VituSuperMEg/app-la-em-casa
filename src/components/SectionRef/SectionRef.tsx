import { Box, Title } from "../../styles/styles";
import { RefContainer, Row, Image, End } from "./styles";
import refeicoes from "../../assets/images/refeicoes.png";

export function SectionRef() {
  return (
    <Box align="start" justify="start" height={390} padding={30}>
      <Row>
        <RefContainer>
          <Title>Refeições</Title>
          <End>
            <Image source={refeicoes} />
          </End>
        </RefContainer>
        <RefContainer></RefContainer>
      </Row>
      <Row>
        <RefContainer></RefContainer>
        <RefContainer></RefContainer>
      </Row>
    </Box>
  );
}
