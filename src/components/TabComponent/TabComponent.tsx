import { TabComponentContainer, TabComponentContent } from "./styles";

export function TabComponent() {
  return (
    <TabComponentContainer>
      <TabComponentContent
        style={{
          borderColor: "rgba(0, 0, 0, 0.5)", 
          borderWidth: 0.5,
        }}
      ></TabComponentContent>
    </TabComponentContainer>
  );
}
