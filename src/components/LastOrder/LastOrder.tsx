import React from "react";
import { orderLast } from "../../mocks/mocks";
import { LastOrderContainer, LastOrderItem, LastOrderFlatList, LastOrderValues, LastOrderButton } from "./styles";
import { Title } from "../../styles/styles";
import { Button } from "../Button/Button";
import { formatDate } from "../../Util/format";

export function LastOrder() {
  function handleRepeatOrder(id: number) {
    console.log(id);
  }
  const renderItem = ({ item }) => (
    <LastOrderItem key={item.id}>
      <LastOrderValues>
      <Title>{item.name}</Title>
      <Title>R$ {item.price}</Title>
      <Title>{formatDate(item.date)}</Title>
      </LastOrderValues>
      <LastOrderButton>
        <Button
          background="yellowLight"
          color="dark"
          size={12}
          title="Pedir Novamente"
          onPress={() => handleRepeatOrder(item.id)}
        />
      </LastOrderButton>
    </LastOrderItem>
  );

  return (
    <LastOrderContainer>
      <Title>🧂 Últimos Pedidos</Title>
      <LastOrderFlatList
        data={orderLast}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </LastOrderContainer>
  );
}
