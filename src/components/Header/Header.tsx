import { List } from "phosphor-react-native";
import { useUser } from "../../state/useUser";
import { Box, Btn, Title } from "../../styles/styles";

export function Header() {
  const user = useUser((state) => state.user);
  return (
    <Box align="start" justify="end">
      <Box row="row" justify="space-bewteen" background="debug">
        <Box align="start">
          <Title padddinLeft={20}>Olá, {user.name}</Title>
          <Title>📍{user.location}</Title>
        </Box>
        <Btn>
          <List size={30} />
        </Btn>
      </Box>
    </Box>
  );
}
