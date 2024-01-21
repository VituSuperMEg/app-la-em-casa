import styled from 'styled-components/native'
import theme from '../../styles/theme'

export const ListHeader = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`
export const ListItem = styled.TouchableOpacity`
  background: ${theme.colors.yellowLight};
  height: 40px;
  padding: 10px;
  border-radius: 6px;
`
