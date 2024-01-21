import { ScrollView } from 'react-native'
import { Title } from '../../styles/styles'
import { ListHeader, ListItem } from './styles'

export function List () {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ListHeader>
        <ListItem>
          <Title>Guarnições</Title>
        </ListItem>
        <ListItem>
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
