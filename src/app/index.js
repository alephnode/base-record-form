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

export default () => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>
      <BaseStyles>
        Please complete the form below.
        <div>
          <Form />
        </div>
      </BaseStyles>
    </ThemeProvider>
  </StyletronProvider>
)
