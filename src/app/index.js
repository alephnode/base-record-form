import React from 'react'
import Form from '../form'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, ThemeProvider, styled } from 'baseui'

const engine = new Styletron()

const BaseStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100% - 20px)',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, HelveticaNeue, Helvetica, Roboto, Arial, sans-serif',
  textRendering: 'optimizeLegibility',
})

const FormContainer = styled('div', {
  width: '95%',
  maxWidth: '480px',
  margin: '0 auto',
})

const headingStyles = {
  marginBottom: '1rem',
}

export default () => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>
      <BaseStyles>
        <div style={headingStyles}>Please complete the form below.</div>
        <FormContainer>
          <Form />
        </FormContainer>
      </BaseStyles>
    </ThemeProvider>
  </StyletronProvider>
)
