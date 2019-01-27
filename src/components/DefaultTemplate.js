import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import Footer from '../components/Footer'
import { MySpring } from '../components/react-spring-animation'


const Container = styled.div`
  min-height: calc(100vh - ${rhythm(3)});
  display: flex;
  flex-direction: column;
  padding: ${rhythm(1)};
  max-width: 38em;
  margin: auto;
`

const Inner = styled.div`
  flex-grow: 1;
`

const DefaultTemplate = ({ children }) => (
  <MySpring>
    <Container>
      <Inner>
        {children}
      </Inner>

      <Footer />
    </Container>
  </MySpring>
)

export default DefaultTemplate
