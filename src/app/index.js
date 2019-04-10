/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import BaseInput from '../BaseInput'
import { baseStyles } from '../common/styles'

export default () => (
  <div css={baseStyles}>
    Please complete the form below.
    <div>
      <BaseInput />
    </div>
  </div>
)
