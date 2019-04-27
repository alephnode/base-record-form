import React from 'react'
import Form from './components/form'
import { styled } from 'baseui'

const headingStyles = {
  marginBottom: '1rem',
}

const FormContainer = styled('div', {
  width: '95%',
  maxWidth: '480px',
  margin: '0 auto',
})

const NewRecord = () => (
  <>
    <div style={headingStyles}>Please complete the form below.</div>
    <FormContainer>
      <Form />
    </FormContainer>
  </>
)

export default NewRecord
