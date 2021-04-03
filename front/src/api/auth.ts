import axios from 'axios'
import {App} from '../types/app'
import  {Auth} from '../types/auth'
import { User } from '../types/user'

export const apiAuthLogin = async (params:Auth.Login.Params): Promise<App.Token> => {
  const { data } = await axios.post<App.Token>('/api/v1/auth/login', params)
  return data
}

export const apiAuthRefresh = async (params: Auth.Refresh.Params): Promise<App.Token> => {
  const { data } = await axios.post<App.Token>('/api/v1/auth/refresh', params)
  return data
}

//Registration нужно описать что отдает запрос
export const apiUserRegistration = async (params:User.Create.Param): Promise<User.Data> =>{
  const { data } = await axios.post<User.Data>('/api/v1/users/create', params)
  return data
}
