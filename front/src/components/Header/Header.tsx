import block from 'bem-cn'
import React from 'react'
import './Header.css'

interface Props {
}

const b = block('header')

export const Header: React.FC<Props> = () => (
  <header className={b()}>
    <a className={b('title')}
      href={'/'}
    >
     Book Catalog
    </a>
    <div className={b('link')}> Войти</div>
    <div className={b('link')}> Регистрация</div>
  </header>
)
