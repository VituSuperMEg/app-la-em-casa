import { TouchableOpacity, View } from "react-native";
import { useUser } from "../../state/useUser";
import { HeaderContainer } from "./styles";
import { Title } from "../../styles/styles";
import { Entypo as Icon, Feather as FA } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface IHedaer {
  stack?: boolean;
}
export function Header({ stack = false }: IHedaer) {

  const { goBack } = useNavigation();

  const user = useUser((state) => state.user);

  return (
    <HeaderContainer>
      {
        !stack && (
          <>
            <View>
              <Title paddingLeft={20}>{user.name}</Title>
              <Title>📍{user.location}</Title>
            </View>
            <TouchableOpacity>
              <Icon name="menu" size={40} />
            </TouchableOpacity>
          </>
        )
      }
      {
        stack && (
          <>
           <TouchableOpacity onPress={() => goBack()}>
             <FA name="corner-up-left" size={30} />
           </TouchableOpacity>
          </>
        )
      }
    </HeaderContainer>
  );
}
