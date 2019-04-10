import React from 'react'
import { Button } from 'baseui/button'

export default props => (
  <Button
    isLoading={props.isLoading}
    onClick={props.onClick}
    style={{ background: '#121212' }}
  >
    Submit
  </Button>
)
