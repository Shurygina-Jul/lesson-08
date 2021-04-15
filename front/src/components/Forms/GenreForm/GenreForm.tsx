import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler, useState } from 'react'
import * as Yup from 'yup'
import { apiGenreCreate, apiGenreUpdate } from '../../../api/genre'
import { browserHistory } from '../../../browserHistory'
import { BaseComponentProps } from '../../../types/base'
import { Genre } from '../../../types/genre'
import { Button } from '../../Button/Button'
import { TypeButton } from '../../Button/TypeButton'
import { Input } from '../../Input/Input'
import './GenreForm.css'

interface Props extends BaseComponentProps {
  data: Genre.Data | null;
}

const b = block('genre-form')

const schema: Yup.SchemaOf<Genre.Create.Params> = Yup.object().shape(({
  name: Yup.string().required('Обязательное')
}))

export const GenreForm: React.FC<Props> = ({ className = '', data }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const { errors, values, submitForm, handleChange } = useFormik<Genre.Create.Params>({
    initialValues: {
      name: data?.name ?? ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
        let id: number
        setLoading(true)
        if (data) {
          id = data.id
          await apiGenreUpdate({ ...data, ...fields })
        } else {
          const res = await apiGenreCreate(fields)
          id = res.id
        }
        browserHistory.push(`/ref/genres/${id}`)
      } catch (err) {
        setErrorText(err.message)
      } finally {
        setLoading(false)
      }
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b({}).mix(className)}>
      <Input
        className={b('field')}
        label={'Жанр'}
        name={'name'}
        value={values.name}
        onChange={handleChange}
        error={errors?.name}
        disabled={loading}
      />
      {!errorText && (
        <p className={b('error')}>
          {errorText}
        </p>
      )}
      <div className={b('buttons')}>
        <Button
          onClick={handlerSubmit}
          loading={loading}
          type={TypeButton.Primary}
        >
          {!!data ? 'Сохранить' : 'Создать'}
        </Button>
      </div>
    </form>
  )
}
