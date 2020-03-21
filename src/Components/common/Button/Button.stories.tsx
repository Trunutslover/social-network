import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'My button',
  component: Button,
}

export const Text = () => <Button>Button</Button>
