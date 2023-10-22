import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from '../src/styles/index'
import Store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/novo',
    element: <Cadastro></Cadastro>
  }
])

function App() {
  return (
    <Provider store={Store}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <RouterProvider router={rotas}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
