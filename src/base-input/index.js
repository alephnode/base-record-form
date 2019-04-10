import React from 'react'
import { styled } from 'baseui'
import { StatefulInput } from 'baseui/input'

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px',
})

export default props => (
  <Centered>
    <StatefulInput
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  </Centered>
)
