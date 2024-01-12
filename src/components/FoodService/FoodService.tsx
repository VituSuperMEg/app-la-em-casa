import { View } from "react-native";
import { Title } from "../../styles/styles";
import { FoodContainer, FoodContent, FoodImg } from "./styles";


import refeicao from '../../assets/images/refeicoes.png';

export function FoodService() {
  return (
    <FoodContainer>
      <View style={{ width: "100%", justifyContent: "flex-start" }}>
        <Title>🍳 Serviços</Title>
      </View>
      <FoodContent>
        <Title>
          Refeições
          {"\n"}
          <Title>A partir de R$ 9,<Title size={10}>99</Title></Title>
        </Title>
        <FoodImg source={refeicao}/>
      </FoodContent>
      <FoodContent></FoodContent>
      <FoodContent></FoodContent>
      <FoodContent></FoodContent>
    </FoodContainer>
  );
}
