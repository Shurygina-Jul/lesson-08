import block from 'bem-cn'
import React, { MouseEventHandler, useMemo } from 'react'
import { BaseComponentProps } from '../../types/base'
import { emptyFunction } from '../../utils'
import { Spinner } from '../Spinner/Spinner'
import { SpinnerType } from '../Spinner/SpinnerType'
import './Button.css'
import { TypeButton } from './TypeButton'


interface Props extends BaseComponentProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
  type?: TypeButton;
  loading?: boolean;
}

const b = block('button')

export const Button: React.FC<Props> = ({
  className = '',
  children,
  onClick = emptyFunction,
  disabled = false,
  htmlType = 'button',
  type = TypeButton.Default,
  loading = false
}) => {
  const spinnerType = useMemo<SpinnerType>(() => {
    switch (type) {
      case TypeButton.Primary:
        return SpinnerType.Secondary
      default:
        return SpinnerType.Primary
    }
  }, [type])

  const visibleSpinner = useMemo<boolean>(() => loading && type !==TypeButton.Link, [type, loading])

  return (
    <button
      className={b({ [type]: true }).mix(className)}
      onClick={onClick}
      disabled={disabled || loading}
      type={htmlType}
    >
      {visibleSpinner && (
        <Spinner
          className={b('spinner')}
          type={spinnerType}
          size={24}
        />
      )}
      <span className={b('children')}>
        {children}
      </span>
    </button>
  )
}

