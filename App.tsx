import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Home } from "./src/screens/Home/Home";
import { useFonts, Poppins_100Thin, Poppins_400Regular} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
