import { useEffect, useState } from 'react'
import { apiAuthorsGetAll } from '../api/authors'
import { Authors } from '../types/authors'

interface UseAuthorsGetAll {
  data: Authors.Data[],
  loading: boolean;
}

export const useAuthorsGetAll = (): UseAuthorsGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Authors.Data[]>([])

  useEffect(() => {
    setLoading(true)
    apiAuthorsGetAll()
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false))

  }, [])

  return {
    data,
    loading
  }
}
