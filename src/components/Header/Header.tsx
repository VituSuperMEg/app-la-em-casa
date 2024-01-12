import { TouchableOpacity, View } from "react-native";
import { useUser } from "../../state/useUser";
import { Count, HeaderContainer } from "./styles";
import { Title } from "../../styles/styles";
import { Entypo as Icon, Feather as FA } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../state/useCart";

interface IHedaer {
  stack?: boolean;
  cart?: boolean;
}
export function Header({ stack = false, cart }: IHedaer) {

  const { goBack, navigate } = useNavigation();

  const user = useUser((state) => state.user);
  const count = useCart((state) => state.countCart);

  return (
    <HeaderContainer>
      {!stack && (
        <>
          <View>
            <Title paddingLeft={20}>{user.name}</Title>
            <Title>📍{user.location}</Title>
          </View>
          <TouchableOpacity>
            <Icon name="menu" size={40} />
          </TouchableOpacity>
        </>
      )}
      {stack && (
        <>
          <View>
            <TouchableOpacity onPress={() => goBack()}>
              <FA name="corner-up-left" size={30} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigate("Check")}>
            <Count>
              <Title color="slate" size={10}>
              {count}
              </Title>
            </Count>
            {cart && <Icon name="shopping-cart" size={30} />}
          </TouchableOpacity>
        </>
      )}
    </HeaderContainer>
  );
}
