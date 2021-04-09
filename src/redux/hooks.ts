import { useSelector as defaultUseSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './store'



//给useSelector重定义，省去每个页面中去定义useSelector的类型
export const useSelector: TypedUseSelectorHook<RootState> = defaultUseSelector