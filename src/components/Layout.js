import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  a {
    color: #000;
  }
`

const Container = styled.div`
  padding: ${rhythm(1)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
`

const Footer = styled.footer`
  text-align: center;
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

        <ContentContainer>
          {children}
        </ContentContainer>

        <Footer>
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
        </Footer>
      </Container>
    )
  }
}

export default Layout
