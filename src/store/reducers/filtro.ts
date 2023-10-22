import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo: string
}

const initialState: FiltroState = {
  termo: ''
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.termo = action.payload.termo
    }
  }
})

export const { alterarTermo, alterarFiltro } = FiltroSlice.actions
export default FiltroSlice.reducer
