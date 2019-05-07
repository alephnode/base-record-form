import React from 'react'
import { Button, KIND } from 'baseui/button'

const BaseButton = props => (
  <Button
    isLoading={props.isLoading}
    onClick={props.onClick}
    kind={props.secondary ? KIND.secondary : KIND.primary}
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
