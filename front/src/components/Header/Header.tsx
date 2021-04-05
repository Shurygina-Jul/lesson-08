import block from 'bem-cn'
import React from 'react'
import './Header.css'

interface Props {
}

const b = block('header')

export const Header: React.FC<Props> = () => (
  <header className={b()}>
    <a className={b('title')} href={'/'}> Каталог </a>
    <a className ={b('field')} href={'http://localhost:3000/auth'}>Войти</a>
    <a className ={b('field')} href={'http://localhost:3000/registration'}> Регистрация</a>
  </header>
)
