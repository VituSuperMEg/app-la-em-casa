import { Title } from '../../styles/styles'
import { AdsContainer, AdsImage, Scroll } from './styles'
import anuncio from '../../assets/images/anucios.png'

export function Ads () {
  return (
    <AdsContainer>
      <Title>🍔 Anúncios</Title>
      <Scroll horizontal showsHorizontalScrollIndicator={false}>
        <AdsImage source={anuncio}/>
        <AdsImage source={anuncio}/>
        <AdsImage source={anuncio}/>
      </Scroll>
    </AdsContainer>
  )
}
