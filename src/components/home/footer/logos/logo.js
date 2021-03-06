import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'
import Sprite from '@/components/home/common/sprite'

export default styled(Sprite)`
  background-position: 0 95.2381%;
  background-size: 642px;
  height: 75px;
  width: 120px;

  ${mediaQuery} {
    margin-bottom: 20px;
  }
`
