import React from 'react'
import { Button } from 'baseui/button'

const buttonStyles = {
  background: '#212121',
}

const BaseButton = props => (
  <Button
    isLoading={props.isLoading}
    onClick={props.onClick}
    style={buttonStyles}
    overrides={
      props.href
        ? {
            BaseButton: {
              props: {
                $as: 'a',
              },
            },
          }
        : {}
    }
    href={props.href}
  >
    {props.children}
  </Button>
)

export default BaseButton
