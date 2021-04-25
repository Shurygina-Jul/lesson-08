import block from 'bem-cn'
import React from 'react'
import { Link } from 'react-router-dom'
import './AllPage.css'

interface Props {
}

const b = block('all-page')

export const AllPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <Link to = '/ref/genres'> Жанры</Link>
      <Link to = '/ref/publishers'> Издательства</Link>
      <Link to = '/ref/authors'> Авторы</Link>
      <Link to = '/ref/languages'> Языки</Link>
    </div>
  )
}
