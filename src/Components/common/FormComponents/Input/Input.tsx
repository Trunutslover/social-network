import React, { FC } from 'react'
import classes from './Input.module.scss'

interface IInputProps {
  input: any
  label: string
  type: string
  placeholder: string
  meta: {
    touched: boolean
    error?: string
  }
}

const Input: FC<IInputProps> = ({ input, label, type, placeholder, meta: { touched, error } }) => {
  return (
    <div>
      <label>
        {type !== `checkbox` && <div>{label}</div>}
        <input {...input} placeholder={placeholder} type={type} className={classes.field} />
        {type === `checkbox` && <span>{label}</span>}
      </label>
      {touched && error && <span className={classes.error}>{error}</span>}
    </div>
  )
}

export default Input
