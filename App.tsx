import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Home } from "./src/screens/Home/Home";
import { useFonts, Poppins_100Thin, Poppins_400Regular} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./src/routes/Tab";

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
      <NavigationContainer>
          <Tab />
      </NavigationContainer>
    </ThemeProvider>
  );
}
