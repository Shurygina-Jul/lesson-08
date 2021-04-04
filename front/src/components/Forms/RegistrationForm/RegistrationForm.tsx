import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { User } from '../../../types/user'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import { Button } from '../../Button/Button'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { appActions } from '../../../store/app/actions'
import './RegistrationForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {}

interface OwnProps {
}

type Props = OwnProps & StateProps & DispatchProps
const b = block('registration-form')


const schema: Yup.SchemaOf<User.Create.Param> = Yup.object().shape(({
  login: Yup.string().required(),
  email:Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

const RegistrationFormPresenter:React.FC<Props> = ({ loading, errorText, appRegistration }) => {
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Param>({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appRegistration(fields)
    }
  })
  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
<form className={b()}>
  <h2 className={b('title')}>Регистрация</h2>
  <Input
        className={b('field')}
        label={'Имя'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
 <Input
       className={b('field')}
        label={'email'}
        name={'email'}
        htmlType={InputType.Email}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        disabled={loading}
      />

<Input
        className={b('field')}
        label={'Пароль'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
<Input
        className={b('field')}
        label={'Подтвердить Пароль'}
        name={'passwordConfirm'}
        htmlType={InputType.PasswordConfirm}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
{!!errorText && <p className={'error'}>{errorText}</p>}
      <div>
        <Button text={'Регистрация'} disabled={loading} />
        <Button text={'Войти'} onClick={handlerSubmit} disabled={loading} />
      </div>
    </form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProp)(RegistrationFormPresenter)
