import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { SpringLink, MySpring } from '../components/react-spring-animation'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  a {
    color: #000;
  }
`

const Container = styled.div`
  padding: ${rhythm(4)} ${rhythm(1)} ${rhythm(1)};
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rhythm(1)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${rhythm(1)};
  background: rgba(200, 0, 0, 0.5);
  z-index: 100;
`

const SecondaryLinks = styled.div`
`

const StyledLink = styled(SpringLink)`
  margin-left: 0.5em;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <Container>
        <Global
          styles={globalStyles}
        />

        <Header>
          <SpringLink
            to={`/`}
          >
            Home
          </SpringLink>

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
      </Container>
    )
  }
}

export default Layout
