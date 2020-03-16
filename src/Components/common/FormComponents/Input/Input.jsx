import React from 'react'
import classes from './Input.module.scss'

export default function Input({ input, label, type, placeholder, meta: { touched, error, warning } }) {
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
