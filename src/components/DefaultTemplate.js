import React from 'react'
import { styled } from 'linaria/react'

import Footer from '../components/Footer'
import { rhythm } from '../utils/typography'


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
  <>
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>

    <Footer />
  </>
)

export default DefaultTemplate
