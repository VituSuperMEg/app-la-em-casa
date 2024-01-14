import { useCart } from "../../state/useCart";
import { Container, Title } from "../../styles/styles";

export function Checkout() {
  const cart = useCart((state) => state.cart.flatMap(i => i));
  const total = useCart((state) => state.totalPrice);
  
  console.log(total);
  return (
    <Container>
      <Title>Checkout</Title>
     {cart.map(i => (
      <>
      <Title key={i.id}>
        {i.name}
      </Title>
      <Title>R$ {i.price}</Title>
      <Title>
        {i.complement.map(c => (
          <>
           <Title>
           {c.name}
           </Title>
          </>
        ))}
      </Title>
      </>
     ))}
     <Title>{total}</Title>
    </Container>
  )
}