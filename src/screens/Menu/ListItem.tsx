import { TouchableOpacity, View } from "react-native";
import { Guarnicoes } from "../../mocks/mocks";
import { Title } from "../../styles/styles";
import { LItems } from "./styles";

interface IListItem {
  exibir : string;
}
export function ListItem({ exibir } : IListItem) {
  return (
    <LItems>
      {exibir === "guarnicoes" ? (
        Guarnicoes.map(i => (
          i.items.map(item => (
            <>
            <Title>{item.title}</Title>
            <TouchableOpacity>
            <Title> 🛒 Adicionar ao carrinho</Title>
            </TouchableOpacity>
            </>
          ))
        ))
      ) : ""}
    </LItems>
  )
}
