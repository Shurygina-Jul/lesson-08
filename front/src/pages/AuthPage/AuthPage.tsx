import block from 'bem-cn'
import React from 'react'
import { AuthForm } from '../../components/Forms/AuthForm/AuthForm'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')


export const AuthPage: React.FC<Props> = () => {
    return (
      <div className={b()}>
        <AuthForm/>
        </div>
    )}

// const c = block('field')

// export const AuthPage: React.FC<Props> = () => {
//   return (
//     <div className={b()}>

// <form>
// <div className={b('field')} >
//   <label className={c('label')}>User name:</label>
//   <div className={c('input')} ><input className="input" type="text" name="" value="" id="login" /></div>
// </div>

// <div className={b('field')}>
//    <label className={c('label')}>Password:</label>
//   <div className={c('input')}><input className="input" type="password" name="" value="" id="pass" /></div>
// </div>

// <div className={b('submit')}>
//   <button className="button" type="submit">Submit</button>
//   <label id="remember"><input name="" type="checkbox" value="" /> Remember me</label>
//   </div>

// </form>
//     </div>
//   )
// }
