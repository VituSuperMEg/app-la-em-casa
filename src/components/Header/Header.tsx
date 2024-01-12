import { TouchableOpacity, View } from "react-native";
import { useUser } from "../../state/useUser";
import { HeaderContainer } from "./styles";
import { Title } from "../../styles/styles";
import { Entypo as Icon } from "@expo/vector-icons";

export function Header() {
  const user = useUser((state) => state.user);

  return (
    <HeaderContainer>
      <View>
        <Title paddingLeft={20}>{user.name}</Title>
        <Title>📍{user.location}</Title>
      </View>
      <TouchableOpacity>
        <Icon name="menu" size={40} />
      </TouchableOpacity>
    </HeaderContainer>
  );
}
