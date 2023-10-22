import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Main, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (termo) {
      return itens.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  const exibeResultado = () => {
    if (termo.length > 0) {
      return `Exibindo um total de: ${contatos.length} contato(s)
      ${termo.length > 0 ? ` para a busca "${termo}"` : ''}`
    }
    if (termo === '') {
      return `Exibindo um total de: ${contatos.length} contato(s)`
    }
  }

  const contatos = filtraContatos()
  const resultado = exibeResultado()

  return (
    <Main>
      <Titulo as="p">{resultado}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            ></Contato>
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeContatos
