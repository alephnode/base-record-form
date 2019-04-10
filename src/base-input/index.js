import React from 'react'
import { styled } from 'baseui'
import { StatefulInput } from 'baseui/input'

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

export default () => (
  <Centered>
    <StatefulInput />
  </Centered>
)
