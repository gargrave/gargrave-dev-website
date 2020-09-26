import styled from '@emotion/styled'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

const Container = styled(App)`
  p {
    line-height: 1.6rem;
  }

  hr {
    border: 0;
    border-bottom: 1px dotted #b3b3b3;
    margin: 1.5rem 0 1rem 0;
  }
`

ReactDOM.render(<Container />, document.getElementById('root'))
