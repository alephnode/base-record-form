import React from 'react'
import { useState } from 'react'
import FormButton from '../form-button'
import BaseInput from '../base-input'

export default () => {
  const [values, setValues] = useState({})
  const [isLoading, updateLoading] = useState(false)

  const handleClick = () => {
    updateLoading(true)
    setTimeout(() => updateLoading(false), 500)
    console.log(values)
  }

  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value })

  return (
    <>
      <BaseInput
        name="record"
        value={values.record}
        onChange={handleChange}
        placeholder="Record Name"
      />
      <BaseInput
        name="artist"
        value={values.artist}
        onChange={handleChange}
        placeholder="Artist"
      />
      <BaseInput
        name="colorVariant"
        value={values.colorVariant}
        onChange={handleChange}
        placeholder="Color Variant"
      />
      <FormButton isLoading={isLoading} onClick={handleClick} />
    </>
  )
}
