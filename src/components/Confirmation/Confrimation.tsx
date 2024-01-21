import { Container, Title } from '../../styles/styles'
import cut from '../../assets/images/cut.png'
import { Image } from 'react-native'
import { Center, ImageConfirimation } from './styles'
import { useNavigation } from '@react-navigation/native'

interface IOptions {
  message?: string
  icon: 'cut' | 'order'
}

export function Confirmation ({
  icon,
  message = 'Pedido Feito'
}: IOptions) {
  // const { navigate } = useNavigation()
  // setInterval(() => {
  //   navigate('order')
  // }, 2000)
  return (
   <Container>
     <Center>
     <ImageConfirimation source={cut} />
     <Title>{message}</Title>
     </Center>
   </Container>
  )
}
