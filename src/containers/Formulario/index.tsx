import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoCadastrar, Main, Titulo } from '../../styles/index'
import { Campo } from '../../styles'
import { Form, Label } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatach = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatach(cadastrar({ nome, email, telefone }))
    navigate('/')
  }

  return (
    <Main>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Label htmlFor="nome">Nome completo:</Label>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          id="nome"
        ></Campo>
        <Label htmlFor="email">E-mail:</Label>
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          id="email"
        ></Campo>
        <Label htmlFor="telefone">Telefone:</Label>
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="tel"
          id="telefone"
        ></Campo>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </Main>
  )
}

export default Formulario
