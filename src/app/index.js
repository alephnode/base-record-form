import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import NewRecord from '../pages/new-record'
import Home from '../pages/home'
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

const App = () => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={LightTheme}>
      <BaseStyles>
        <Route exact path="/" component={Home} />
        <Route path="/new-record" component={NewRecord} />
      </BaseStyles>
    </ThemeProvider>
  </StyletronProvider>
)

export default withRouter(App)
