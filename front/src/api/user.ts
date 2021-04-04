import axios from 'axios'
import { User } from '../types/user'


//регистрация пользователя
export const apiUserRegistration = async (params:User.Create.Param): Promise<User.Data> =>{
  const { data } = await axios.post<User.Data>('/api/v1/users/create', params)
  return data
}
