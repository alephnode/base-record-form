import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, ThemeProvider, styled } from 'baseui'
import { StatefulInput } from 'baseui/input'

const engine = new Styletron()

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

export default () => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={DarkTheme}>
      <Centered>
        <StatefulInput />
      </Centered>
    </ThemeProvider>
  </StyletronProvider>
)