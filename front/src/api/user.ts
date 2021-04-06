import axios from 'axios'
import { ApiService } from '../services/Apiservice'
import { User } from '../types/user'


//регистрация пользователя
export const apiUserRegistration = async (params:User.Create.Param): Promise<User.Data> =>{
  const { data } = await ApiService().post<User.Data>('/users/create', params)
  return data
}
