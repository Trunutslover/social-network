import React from 'react'
import { withKnobs, text, radios } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'My button',
  component: Button,
  decorators: [withKnobs],
}

const options: { normal: undefined, green: 'green' } = {
  normal: undefined,
  green: 'green',
}
const defaultValue = undefined
const label = 'Variety'

export const Text = () => (
  <Button variety={radios(label, options, defaultValue)}>
    {text('Button text', 'Button')}
  </Button>
)
