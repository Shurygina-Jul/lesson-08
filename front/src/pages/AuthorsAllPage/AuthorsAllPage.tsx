import block from 'bem-cn'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card/Card'
import { Spinner } from '../../components/Spinner/Spinner'
import { useAuthorsGetAll } from '../../hooks/useAuthorsGetAll'
import { BasePageProps } from '../../types/base'
import './AuthorsAllPage.css'

interface Props extends BasePageProps {
}

const b = block('authors-all-page')

export const AuthorsAllPage: React.FC<Props> = () => {
  const { data, loading } = useAuthorsGetAll()

  return (
    <Card title={'Авторы'} className={b()}>
      <div className={b('content')}>
        {loading && (
          <Spinner size={32} />
        )}
        {data.length > 0 && !loading ? (
          <ul className={b('list')}>
            {data.map(item => (
              <li key={item.id}>
                <Link to={`/ref/authors/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
      <Link to={`/ref/authors/create`}>Добавить автора</Link>
    </Card>
  )
}
