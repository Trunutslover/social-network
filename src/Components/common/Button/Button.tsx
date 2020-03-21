import styled from '@emotion/styled'
import { switchProp } from 'styled-tools'

interface IButtonProps {
  variety?: 'green'
}

const Button = styled.button<IButtonProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 10px',
  border: 'none',
  fontWeight: 'bold',
  color: '#000000',
  textTransform: 'uppercase',
  backgroundColor: '#eeeeee',
  borderRadius: '5px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#dddddd',
  },
}),
  switchProp('variety', {
    green: {
      color: '#FFFFFF',
      backgroundColor: '#00cc00',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#00cccc',
      },
    },
  })
)

export default Button
