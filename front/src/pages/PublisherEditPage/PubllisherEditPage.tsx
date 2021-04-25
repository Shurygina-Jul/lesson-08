import block from 'bem-cn'
import React, { useMemo } from 'react'
import { Card } from '../../components/Card/Card'
import { PublisherForm } from '../../components/Forms/PublisherForm/PublisherForm'
import { Spinner } from '../../components/Spinner/Spinner'
import { usePublisherById } from '../../hooks/usePublisherById'
import { BasePageProps } from '../../types/base'
import './PubllisherEditPage.css'

interface Props extends BasePageProps<{ id?: string }> {
}

const b = block('publisher-edit-page')

export const PublisherEditPage: React.FC<Props> = ({ match }) => {
  const id = useMemo<number | undefined>(() => match.params?.id ? +match.params?.id : undefined, [match])
  const { data, loading } = usePublisherById(id)

  return (
    <Card title={!!data ? 'Редактировать' : 'Создать'}>
      {loading ? (
        <Spinner size={32} />
      ) : (
        <PublisherForm data={data} />
      )}
    </Card>
  )
}
