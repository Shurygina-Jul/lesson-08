import block from 'bem-cn'
import React from 'react'
import { BasePageProps } from '../../types/base'
import { AuthForm } from '../../components/Forms/AuthForm/AuthForm'
import './AuthPage.css'

interface Props extends BasePageProps {
}


const b = block('auth-page')


export const AuthPage: React.FC<Props> = () => {
    return (
      <div className={b()}>
        <AuthForm/>
        </div>
    )}
