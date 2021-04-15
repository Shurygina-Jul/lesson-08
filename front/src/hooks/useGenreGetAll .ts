import { useEffect, useState } from 'react'
import { apiGenreGetAll } from '../api/genre'
import { Genre } from '../types/genre'



interface UseGenreGetAll {
  data: Genre.Data[],
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useGenreGetAll = (defaultSearch: string = ''): UseGenreGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Genre.Data[]>([])
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Genre.All.Search = {}

    if (search) {
      params.search = search
    }

    setLoading(true)
    apiGenreGetAll(params)
      .then(setData)
      .catch(err => {
        console.error(err)
        setData([])
      })
      .then(() => setLoading(false))

  }, [search])

  return {
    data,
    loading,
    setSearch
  }
}
