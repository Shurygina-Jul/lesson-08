import axios, { AxiosError } from 'axios'
import { ApiService } from '../services/Apiservice'
import { App } from '../types/app'
import { User } from '../types/user'


//регистрация пользователя
export const apiUserRegistration = async (params:User.Create.Param): Promise<User.Data | never> =>{
  try {
    const { data } = await ApiService().post<User.Data>('/users/create', params)
    return data
  } catch (err) {
    const {response} = err as AxiosError<App.ResponseError>
    throw new Error (response?.data?.errors?.join(' ') || err.message)
  }

}
