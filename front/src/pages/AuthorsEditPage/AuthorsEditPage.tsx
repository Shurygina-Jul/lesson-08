import block from 'bem-cn'
import React, { useMemo } from 'react'
import { Card } from '../../components/Card/Card'
import { AuthorsForm } from '../../components/Forms/AuthorsForm/AuthorsForm'
import { Spinner } from '../../components/Spinner/Spinner'
import { useAuthorsById } from '../../hooks/useAuthorsById'
import { BasePageProps } from '../../types/base'
import './AuthorsEditPage.css'

interface Props extends BasePageProps<{ id?: string }> {
}

const b = block('authors-edit-page')

export const AuthorsEditPage: React.FC<Props> = ({ match }) => {
  const id = useMemo<number | undefined>(() => match.params?.id ? +match.params?.id : undefined, [match])
  const { data, loading } = useAuthorsById(id)

  return (
    <Card title={!!data ? 'Редактировать' : 'Создать'}>
      {loading ? (
        <Spinner size={32} />
      ) : (
        <AuthorsForm data={data} />
      )}
    </Card>
  )
}
