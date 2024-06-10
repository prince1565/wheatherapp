import React from 'react'
import spinner from '../imges/loading.gif'
export default function Spinner() {
  return (
    <div className='spinner'>
        <img src={spinner} alt='Loading'/>
    </div>
  )
}
