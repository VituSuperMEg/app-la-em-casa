import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home/Home";
import { Order } from "../screens/Order/Order";
import { Entypo as Icon } from "@expo/vector-icons";
import theme from "../styles/theme";
import { Menu } from "../screens/Menu/Menu";
import { Checkout } from "../screens/Checkout/Checkout";
import { Stack } from "./Stack";

const T = createBottomTabNavigator();

export function Tab() {
  return (
    <T.Navigator screenOptions={({ route }) => ({
      headerShown : false,
      tabBarIcon: ({ color, size }) => {
        let iconName = route.name === "Home" ? "home" : route.name === "Order" ? "time-slot" : route.name === "Cardapio" ? "list" : route.name === 'Check' ? 'shopping-cart' :undefined;
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.yellow,
      tabBarInactiveTintColor: 'gray',
    })}>
      <T.Screen name="Home" component={Home} />
      <T.Screen name="Cardapio" component={Menu} />
      <T.Screen name="Order" component={Order} />
      <T.Screen name="Check" component={Checkout} />
    </T.Navigator>
  )
}