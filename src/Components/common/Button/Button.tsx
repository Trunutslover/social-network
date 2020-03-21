import styled from '@emotion/styled'

interface IButtonProps {

}

const Button = styled.button<IButtonProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 10px',
  border: 'none',
  fontWeight: 'bold',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  backgroundColor: '#00cc00',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#00cccc',
  }
}))

export default Button
