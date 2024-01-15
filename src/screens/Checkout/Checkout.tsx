import { TouchableOpacity, View } from 'react-native'
import { type Item, useCart } from '../../state/useCart'
import { Container, Title } from '../../styles/styles'
import {
  CheckOutComplement,
  CheckOutRef,
  CheckoutContainer,
  CheckoutFooter,
  CheckoutPreview,
  HeaderCheckout,
  Trash
} from './styles'
import { Button } from '../../components/Button/Button'
import { MaterialIcons as Icon } from '@expo/vector-icons'

export function Checkout () {
  const cart = useCart((state) => state.cart.flatMap((i) => i))
  const total = useCart((state) => state.totalPrice)
  const removeToComplementeCart = useCart((state) => state.removeToComplementeCart)

  function handleRemoveToComplementeCart (item: Item) {
    removeToComplementeCart(item)
  }
  return (
    <CheckoutContainer>
      <HeaderCheckout>
        <Title>🛒 Meu carrinho</Title>
      </HeaderCheckout>
      <CheckoutPreview>
        {cart.map((c) => (
          <>
            <CheckOutRef>
              <Title>{c.name}</Title>
            </CheckOutRef>
            {c.complement.map((i) => (
              <CheckOutComplement>
                <Title>
                  {i.name} - R$ {i.price}
                </Title>
                <Trash>
                  <Icon name='delete' size={20} color="#fff" onPress={() => { handleRemoveToComplementeCart(c) }}/>
                </Trash>
              </CheckOutComplement>
            ))}
          </>
        ))}
      </CheckoutPreview>
      <CheckoutFooter>
        <View
          style={{
            alignItems: 'flex-end'
          }}
        >
          <Title>Total : R$ {total}</Title>
        </View>
        <Button title="Confirmar Pedido" background="yellow" height={50} />
        <Button
          style={{
            marginTop: 10
          }}
          title="Problemas ? clique aqui"
          background="info"
          height={50}
        />
      </CheckoutFooter>
    </CheckoutContainer>
  )
}
