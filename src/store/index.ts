import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

const Store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>
export default Store
