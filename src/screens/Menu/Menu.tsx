import { View } from 'react-native'
import { Container, Title } from '../../styles/styles'
import { List } from './List'
import { ListItem } from './ListItem'
import { useState } from 'react'


export function Menu () {
  const [exibir, setExibir] = useState("");
  return (
    <Container>
      <View>
      <List onExibir={setExibir}/>
      </View>
      <ListItem exibir={exibir} />
    </Container>
  )
}
