import { ApiService } from '../services/Apiservice'
import { Authors } from '../types/authors'



export const apiAuthorsGetAll = async (): Promise<Authors.Data[]> => {
  const { data } = await ApiService(true).get<Authors.Data[]>('/authors')
  return data
}
export const apiAuthorsGetById = async (id: number): Promise<Authors.Data> => {
  const { data } = await ApiService(true).get<Authors.Data>(`/authors/${id}`)
  return data
}

export const apiAuthorsCreate = async (params: Authors.Create.Params): Promise<Authors.Data> => {
  const { data } = await ApiService(true).post<Authors.Data>('/authors', params)
  return data
}

export const apiAuthorsUpdate = async (params: Authors.Data): Promise<Authors.Data> => {
  const { data } = await ApiService(true).put<Authors.Data>('/authors', params)
  return data
}
