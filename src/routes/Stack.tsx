import { createStackNavigator } from '@react-navigation/stack'
import { Ref } from '../screens/Ref/Ref'
import { Tab } from './Tab'
import { Confirmation } from '../components/Confirmation/Confrimation'
import { Order } from '../screens/Order/Order'

const S = createStackNavigator()

export function Stack () {
  return (
    <S.Navigator screenOptions={{
      headerShown: false
    }}>
      <S.Screen name="Home" component={Tab} />
      <S.Screen name="refeicao" component={Ref}/>
      <S.Screen name="confirmation" component={Confirmation} />
    </S.Navigator>
  )
}
