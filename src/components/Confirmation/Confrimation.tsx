import React, { useEffect } from 'react'
import { Container, Title } from '../../styles/styles'
import cut from '../../assets/images/cut.png'
import { Image } from 'react-native'
import { Center, ImageConfirimation } from './styles'
import { useNavigation } from '@react-navigation/native'

interface IOptions {
  message?: string
  icon: 'cut' | 'order'
}

export function Confirmation ({ icon, message = 'Pedido Feito' }: IOptions) {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home', {
        screen: 'Order'
      })
    }, 1000)
  }, [navigation])

  return (
    <Container>
      <Center>
        <ImageConfirimation source={cut} />
        <Title>{message}</Title>
      </Center>
    </Container>
  )
}
