import { Box, Title } from "../../styles/styles";
import { RefContainer, Row, Image, End } from "./styles";
import refeicoes from "../../assets/images/refeicoes.png";

export function SectionRef() {
  return (
    <Box align="start" justify="start" height={390} padding={30}>
     <RefContainer>
       <Title color="info">
        Refeições {"\n"}
        <Title >
          A partir R$ 9,<Title style={{
            fontSize: 13
          }}>99</Title>
        </Title> 
      </Title>
       <Image source={refeicoes}/>
     </RefContainer>
     <RefContainer>
       <Title>Refeições</Title>
     </RefContainer>
     <RefContainer>
       <Title>Refeições</Title>
     </RefContainer>
     <RefContainer>
       <Title>Refeições</Title>
     </RefContainer>
    </Box>
  );
}
