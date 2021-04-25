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
      <Link to = '/ref/genres' className={b('link')}> Жанры</Link>
      <Link to = '/ref/publishers' className={b('link')}> Издательства</Link>
      <Link to = '/ref/authors' className={b('link')}> Авторы</Link>
      <Link to = '/ref/languages' className={b('link')}> Языки</Link>
    </div>
  )
}
