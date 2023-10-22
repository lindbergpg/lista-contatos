import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
}

const Contador = ({ legenda }: Props) => {
  const { contatos } = useSelector((state: RootReducer) => state)

  const contarContatos = () => {
    return contatos.itens.length
  }

  const contador = contarContatos()

  return (
    <S.Card>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default Contador
