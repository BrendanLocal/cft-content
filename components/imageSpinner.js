import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Spinner = ()=> {
  <div className='spinner fadein'>
    <FontAwesomeIcon icon={faCircleNotch} size='5x' color='#3B5998' />
  </div>
}

export default Spinner