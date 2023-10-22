import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Contador from '../../components/ContadorCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { BotaoCadastrar, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            ></Campo>
            <S.ContadorEstilo>
              <Contador legenda="Contatos cadastrados"></Contador>
            </S.ContadorEstilo>
          </>
        ) : (
          <BotaoCadastrar onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </BotaoCadastrar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
