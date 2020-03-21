import React, { FC } from 'react'
import preloader from '../../../assets/preloader.gif'

const Preloader: FC = () => {
  return (
    <div>
      <img src={preloader} alt={`Loading...`} width='40px' height='40px' />
    </div>
  )
}

export default Preloader
