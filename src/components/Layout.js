import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const Container = styled.div`
  margin: ${rhythm(1)};
`

const Footer = styled.footer`
  text-align: center;
`

const globalStyles = css`
  a {
    color: #000;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rhythm(1)};
`

const SecondaryLinks = styled.div`
`

const StyledLink = styled(Link)`
  margin-left: 0.5em;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <Container>
        <Global
          styles={globalStyles}
        />

        <Header>
          <Link
            to={`/`}
          >
            Home
          </Link>

          <SecondaryLinks>
            <StyledLink
              to={`/`}
            >
              Work
            </StyledLink>
          </SecondaryLinks>
        </Header>

        {children}

        <Footer>
          © {new Date().getFullYear()} Lenny Sirivong
          <p>
            <a href="https://github.com/lsirivong">
              Github
            </a>
            {` • `}
            <a href="https://twitter.com/lsirivong">
              Twitter
            </a>
          </p>
        </Footer>
      </Container>
    )
  }
}

export default Layout
