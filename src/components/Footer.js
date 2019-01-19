import React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer`
  text-align: center;
`

const Footer = () => (
  <Container>
    © {new Date().getFullYear()} Lenny Sirivong

    <br />

    <a href="https://github.com/lsirivong">
      Github
    </a>
    {` • `}
    <a href="https://twitter.com/lsirivong">
      Twitter
    </a>
    {` • `}
    <a href="https://lsirivong.itch.io">
      Itch
    </a>
  </Container>
)

export default Footer
