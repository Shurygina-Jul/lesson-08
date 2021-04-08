import block from 'bem-cn'
import React from 'react'
import { Author } from '../../components/Guids/Author/Author'
import './CatalogPage.css'

interface Props {
}

const b = block('catalog-page')

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b('card-set')}>
      <article className ={b('card')}>
          <a className ={b('link')} href={'http://localhost:3000/ref/authors'}>Авторы</a>
      </article>
      <article className ={b('card')}>
          <a className ={b('link')} href={'http://localhost:3000/ref/genre'}>Жанры</a>
      </article>
      <article className ={b('card')}>
         <a className ={b('link')} href={'http://localhost:3000/ref/languade'}>Языки</a>
      </article>
    <article className ={b('card')}>
    <a className ={b('link')} href={'http://localhost:3000/ref/publisher'}>Издательства</a>
    </article>

    <Author/>
    </div>

  )
}
