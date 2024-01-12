import { SafeAreaView, Text } from "react-native";
import { Container } from "../../styles/styles";
import { Header } from "../../components/Header/Header";
import { FoodService } from "../../components/FoodService/FoodService";
import { Ads } from "../../components/Ads/Ads";
import { TabComponent } from "../../components/TabComponent/TabComponent";

export function Home() {
  return (
    <Container>
      <Header />
      <Ads />
      <FoodService />

      <TabComponent />
    </Container>
  )
}