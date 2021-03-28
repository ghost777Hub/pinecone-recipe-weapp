import { combineReducers, configureStore } from '@reduxjs/toolkit'



//state定义
export type RootState = ReturnType<typeof store.getState>

//创建reducer
const rootReducer = combineReducers({

})

//创建store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ],
  devTools: false
})

export default store