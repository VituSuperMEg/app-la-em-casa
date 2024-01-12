import { ScrollView, View } from "react-native";
import { Header } from "../../components/Header/Header";
import { Container, Title } from "../../styles/styles";
import refeicao from "../../assets/images/refeicoes.png";
import {
  RefCardCompletion,
  RefCart,
  RefCheckbox,
  RefCompletion,
  RefContent,
  RefImage,
  RefScroll,
  RefTitle,
} from "./styles";
import { Button } from "../../components/Button/Button";
import { useCart } from "../../state/useCart";
import { useState } from "react";

interface Item {
  id : number;
  name : string;
  price : number;
}
export function Ref() {

  const addToCart = useCart((state) => state.addToCart);
  const [item, setItem] = useState<Item[]>([]);

  return (
    <Container>
      <Header 
       stack 
       cart
      />
      <RefContent>
        <RefImage source={refeicao} />
        <RefTitle>
          <Title>
            Escolha o tipo de carne.
            {"\n"}
            <Title size={12}>(com direito a dois tipos de carnes)</Title>
            {"\n"}
            Acompanha Guarnição, Salada, Feijão e Batata.
            {"\n"}
            <Title size={10}>Serve 1 pessoa</Title>
          </Title>
        </RefTitle>
        <RefScroll>
          <RefCardCompletion>
            <RefCompletion>
              <Title>Guarnições</Title>
            </RefCompletion>
            <RefCheckbox></RefCheckbox>
            <RefCheckbox></RefCheckbox>
          </RefCardCompletion>
          <RefCardCompletion>
            <RefCompletion>
              <Title>Adicionais</Title>
            </RefCompletion>
            <RefCheckbox></RefCheckbox>
            <RefCheckbox></RefCheckbox>
            <RefCheckbox></RefCheckbox>
            <RefCheckbox></RefCheckbox>
          </RefCardCompletion>
        </RefScroll>
        <RefCart>
          <Button background="yellow" title="Adicionar ao Carrinho" height={55} onPress={() => addToCart(item)}/>
        </RefCart>
      </RefContent>
    </Container>
  );
}
