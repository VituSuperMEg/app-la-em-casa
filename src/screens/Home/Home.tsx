import { Anucios } from "../../components/Anuncios/Anuncios";
import { Header } from "../../components/Header/Header";
import { Box } from "../../styles/styles";
import theme from "../../styles/theme";

export function Home() {
  return (
    <Box background="slate" align="start" justify="start">
      <Box height={200}>
      <Header />
      </Box>
      <Anucios />
    </Box>
  )
}