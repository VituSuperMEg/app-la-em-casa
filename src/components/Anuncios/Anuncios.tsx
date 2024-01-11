import { Image } from "react-native";
import { Box, Scroll, Title } from "../../styles/styles";
import anucios from '../../assets/images/anucios.png';
import { CardAds } from "./styles";

export function Anucios () {
  return (
   <Box height={250} align="start" justify="start" padding={20}>
     <Title>🍔 Anúncios</Title>
     <Scroll horizontal marginTop={25}>
       <CardAds source={anucios} />
       <CardAds source={anucios} />
       <CardAds source={anucios} />
     </Scroll>
   </Box>
  )
}