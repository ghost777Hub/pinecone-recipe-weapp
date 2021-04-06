import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/slice'
import { recipesSlice } from './recipes/slice'



//state定义
export type RootState = ReturnType<typeof store.getState>

//创建reducer
const rootReducer = combineReducers({
  user: userSlice.reducer,
  recipe: recipesSlice.reducer
})

//创建store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ],
  devTools: false
})

export default store