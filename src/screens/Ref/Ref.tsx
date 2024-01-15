import { Header } from '../../components/Header/Header'
import { Container, Title } from '../../styles/styles'
import refeicao from '../../assets/images/refeicoes.png'
import {
  RefCardCompletion,
  RefCart,
  RefCheckbox,
  RefCompletion,
  RefContent,
  RefImage,
  RefScroll,
  RefTitle
} from './styles'
import { Button } from '../../components/Button/Button'
import { useCart } from '../../state/useCart'
import { useState } from 'react'
import { RefSimple } from '../../mocks/mocks'

interface Item {
  id: number
  name: string
  price: number
  complement: []
}
export function Ref () {
  const addToCart = useCart((state) => state.addToCart)

  const [item, setItem] = useState<Item[]>([
    {
      id: 1,
      name: 'refeição simples',
      price: 10,
      complement: []
    }
  ])

  function addItemAndRef (item: Item) {
    setItem((prevItems) => {
      const updatedItems = [...prevItems]
      updatedItems[0].complement.push(item)
      return updatedItems
    })
  }
  function addItemCartRef () {
    addToCart(item)
  }
  console.log(RefSimple)
  return (
    <Container>
      <Header stack cart />
      <RefContent>
        <RefImage source={refeicao} />
        <RefTitle>
          <Title>
            Escolha o tipo de carne.
            {'\n'}
            <Title size={12}>(com direito a dois tipos de carnes)</Title>
            {'\n'}
            Acompanha Arroz ou Baião, Salada, Feijão e Batata.
            {'\n'}
            <Title size={10}>Serve 1 pessoa</Title>
          </Title>
        </RefTitle>
        <RefScroll>
          {RefSimple.map(ref => (
            ref.items.map(i => (
              <RefCardCompletion key={i.id}>
                <RefCompletion>
                  <Title>{i.title}</Title>
                </RefCompletion>
                {i.items.map(item => (
                  item.details.map(r => (
                    <RefCheckbox onPress={() => { addItemAndRef(r) }}>
                      <Title>
                        {r.name}
                        {'\n'}
                        R$ {r.price}
                      </Title>
                    </RefCheckbox>
                  ))
                ))}
              </RefCardCompletion>
            ))))}
        </RefScroll>
        <RefCart>
          <Button
            background="yellow"
            title="Adicionar ao Carrinho"
            height={55}
            onPress={() => { addItemCartRef() }}
          />
        </RefCart>
      </RefContent>
    </Container>
  )
}
