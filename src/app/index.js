import React from 'react'
import BaseInput from '../base-input'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, ThemeProvider, styled } from 'baseui'

const engine = new Styletron()

const BaseStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100% - 20px)',
})

export default () => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={DarkTheme}>
      <BaseStyles>
        Please complete the form below.
        <div>
          <BaseInput />
        </div>
      </BaseStyles>
    </ThemeProvider>
  </StyletronProvider>
)
