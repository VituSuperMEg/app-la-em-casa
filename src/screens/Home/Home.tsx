import { SafeAreaView } from "react-native";
import { Anucios } from "../../components/Anuncios/Anuncios";
import { Header } from "../../components/Header/Header";
import { SectionRef } from "../../components/SectionRef/SectionRef";
import { Box } from "../../styles/styles";
import theme from "../../styles/theme";

export function Home() {
  return (
    <Box background="slate">
      <Header />
      <Anucios />
      <SectionRef />
    </Box>
  )
}