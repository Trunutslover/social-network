import React from 'react'
import preloader from '../../../assets/preloader.gif'

export default function Preloader(props) {
  return (
    <div>
      <img src={preloader} alt={`Loading...`} width='40px' height='40px' />
    </div>
  )
}
