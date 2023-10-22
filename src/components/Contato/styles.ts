import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 0 0 16px 16px;
`

export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const EmailTelefone = styled.input`
  font-size: 12px;
  margin: 12px 0;
  color: #5e5e5e;
  display: block;
  width: 130px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #a1a1a1;
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.amarelo};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
