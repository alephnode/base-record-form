import React from 'react'
import FormButton from '../form-button'
import BaseInput from '../base-input'

const handleClick = e => console.log('submit')

export default () => (
  <div>
    <BaseInput placeholder="Record Name" />
    <FormButton onClick={handleClick} />
  </div>
)
