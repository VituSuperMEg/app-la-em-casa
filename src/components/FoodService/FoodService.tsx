import { View } from "react-native";
import { Title } from "../../styles/styles";
import { FoodContainer, FoodContent, FoodImg } from "./styles";

import refeicao from "../../assets/images/refeicoes.png";
import lanches from "../../assets/images/lanches.png";
import bebidas from "../../assets/images/bebidas.png";
import buffe from "../../assets/images/buffe.png";
import { useNavigation } from "@react-navigation/native";

export function FoodService() {
  
  const { navigate } = useNavigation();

  return (
    <FoodContainer>
      <View style={{ width: "100%", justifyContent: "flex-start" }}>
        <Title>🍳 Serviços</Title>
      </View>
      <FoodContent onPress={() => navigate("refeicao")}>
        <View>
          <Title size={16}>Refeições</Title>
          <Title size={25}>
            A partir de R$ 9, <Title size={20}>99</Title>
          </Title>
        </View>
        <FoodImg source={refeicao} />
      </FoodContent>
      <FoodContent>
        <View>
          <Title size={16}>Lanches</Title>
        </View>
        <FoodImg source={lanches} />
      </FoodContent>
      <FoodContent>
        <View>
          <Title size={16}>Bebidas</Title>
        </View>
        <FoodImg source={bebidas} />
      </FoodContent>
      <FoodContent>
        <View>
          <Title size={16}>Monte seu cardápio</Title>
        </View>
        <FoodImg source={buffe} />
      </FoodContent>
    </FoodContainer>
  );
}
