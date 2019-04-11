import React from 'react'
import { Button } from 'baseui/button'

const buttonStyles = {
  background: '#212121',
}

export default props => (
  <Button
    isLoading={props.isLoading}
    onClick={props.onClick}
    style={buttonStyles}
  >
    Submit
  </Button>
)
