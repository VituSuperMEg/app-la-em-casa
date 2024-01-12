import { SafeAreaView, ScrollView, Text } from "react-native";
import { Container } from "../../styles/styles";
import { Header } from "../../components/Header/Header";
import { FoodService } from "../../components/FoodService/FoodService";
import { Ads } from "../../components/Ads/Ads";
import { LastOrder } from "../../components/LastOrder/LastOrder";

export function Home() {
  return (
    <Container>
      <Header />
      <ScrollView>
      <Ads />
        <FoodService />
        <LastOrder />
      </ScrollView>
    </Container>
  );
}
