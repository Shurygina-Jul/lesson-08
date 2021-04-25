import block from 'bem-cn'
import React, { useMemo } from 'react'
import { Card } from '../../components/Card/Card'
import { GenreForm } from '../../components/Forms/GenreForm/GenreForm'
import { Spinner } from '../../components/Spinner/Spinner'
import { useGenreGetById } from '../../hooks/useGenreById'
import { BasePageProps } from '../../types/base'
import './GenreEditPage.css'


interface Props extends BasePageProps<{ id?: string }> {
}
const b = block('genre-edit-page')

export const GenreEditPage: React.FC<Props> = ({match}) => {
  const id = useMemo<number | undefined>(() => match.params?.id ? +match.params?.id : undefined, [match])
  const { data, loading } =  useGenreGetById(id)

  return (
    <Card title={!!data ? 'Редактировать' : 'Создать'}>
      {loading ? (
        <Spinner size={32} />
      ) : (
        <GenreForm data={data} />
      )}
    </Card>
  )
}
