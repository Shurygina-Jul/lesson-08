import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler, useState } from 'react'
import * as Yup from 'yup'
import { apiPublisherCreate, apiPublisherUpdate } from '../../../api/publisher'
import { browserHistory } from '../../../browserHistory'
import { BaseComponentProps } from '../../../types/base'
import { Publisher } from '../../../types/publisher'
import { Button } from '../../Button/Button'
import { TypeButton } from '../../Button/TypeButton'
import { Input } from '../../Input/Input'
import './PublisherForm.css'


interface Props extends BaseComponentProps {
  data: Publisher.Data | null;
}

const b = block('publisher-form')

const schema: Yup.SchemaOf<Publisher.Create.Params> = Yup.object().shape(({
  name: Yup.string().required('Обязательное')
}))

export const PublisherForm: React.FC<Props> = ({ className = '', data }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const { errors, values, submitForm, handleChange } = useFormik<Publisher.Create.Params>({
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
          await apiPublisherUpdate({ ...data, ...fields })
        } else {
          const res = await apiPublisherCreate(fields)
          id = res.id
        }
        browserHistory.push(`/ref/publishers/${id}`)
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
        label={'Издательство'}
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
