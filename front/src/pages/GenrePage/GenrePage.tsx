import block from 'bem-cn'
import React, { useCallback, useMemo } from 'react'
import { browserHistory } from '../../browserHistory'
import { Button } from '../../components/Button/Button'
import { TypeButton } from '../../components/Button/TypeButton'
import { Card } from '../../components/Card/Card'
import { Spinner } from '../../components/Spinner/Spinner'
import { useGenreGetById  } from '../../hooks/useGenreById'
import { BasePageProps } from '../../types/base'
import './GenrePage.css'

interface Props extends BasePageProps<{ id: string }> {
}

const b = block('genre-page')

export const GenrePage: React.FC<Props> = ({ match }) => {
  const id = useMemo<number>(() => +match.params.id, [match])
  const { data, loading } = useGenreGetById (id)

  const button = useCallback(() => data ? (
    <Button
      type={TypeButton.Secondary}
      onClick={() => browserHistory.push(`/ref/genres/${data.id}/edit`)}
    >
      Редактировать
    </Button>
  ) : null, [data])

  return (
    <Card
      title={data ? `${data?.name} жанр` : ''}
      rightElement={button}
    >
      {loading ? (
        <Spinner size={32} />
      ) : (
        <pre>
          {JSON.stringify(data)}
        </pre>
      )}
    </Card>
  )
}
