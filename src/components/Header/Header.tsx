import { View } from "react-native";
import { useUser } from "../../state/useUser";
import { HeaderContainer } from "./styles";
import { Title } from "../../styles/styles";

export function Header() {
  const user = useUser((state) => state.user);

  return (
    <HeaderContainer>
      <View>
        <Title paddingLeft={20}>{user.name}</Title>
        <Title>📍{user.location}</Title>
      </View>
    </HeaderContainer>
  );
}
