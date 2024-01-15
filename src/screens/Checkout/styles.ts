import styled from 'styled-components/native'
import theme from '../../styles/theme'

export const HeaderCheckout = styled.View`
  background: ${theme.colors.yellow};
  height: 200px;
  padding: 20px;
  margin-left: -10px;
  border-radius: 0 0 60px 60px;
`
export const CheckoutContainer = styled.View`
  background: ${theme.colors.slate};
  flex: 1;
  padding-top: 20px;
`
export const CheckoutPreview = styled.ScrollView`
  flex: 1;
  padding: 20px;
`
export const CheckOutRef = styled.View`
  background: ${theme.colors.yellow};
  margin-top: 20px;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  padding-left: 20px;
`
export const CheckOutComplement = styled.View`
  background: ${theme.colors.yellowLight};
  margin-top: 5px;
  height: 40px;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
  flex-direction: row;
`
export const Trash = styled.TouchableOpacity`
 background: ${theme.colors.red};
 height: 100%;
 width: 40px;
 align-items: center;
 justify-content: center;
`
export const CheckoutFooter = styled.View`
  padding: 20px;
`
