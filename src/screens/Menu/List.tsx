import { ScrollView } from 'react-native'
import { Title } from '../../styles/styles'
import { ListHeader, ListItem } from './styles'

interface ILIst {
  onExibir : (exibir : string) => void
}
export function List ({
  onExibir
}:ILIst) {


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ListHeader>
        <ListItem onPress={() => onExibir("guarnicoes")}>
          <Title>Guarnições</Title>
        </ListItem>
        <ListItem onPress={() => onExibir("espetinhos")}>
          <Title>Espetinhos</Title>
        </ListItem>
        <ListItem>
          <Title>Adicionais</Title>
        </ListItem>
        <ListItem>
          <Title>Refrigerantes</Title>
        </ListItem>
      </ListHeader>
    </ScrollView>
  )
}
