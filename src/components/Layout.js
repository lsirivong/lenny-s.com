import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { SpringLink, MySpring } from '../components/react-spring-animation'
import { ThemeProvider, withTheme } from 'emotion-theming'

const globalStyles = theme => css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.foreground};
    background: ${theme.background};
    transition: background 1s ease-out, color 1s ease-out;
  }

  a {
    color: inherit;
  }

  .tl-wrapper-outer {
    overflow: hidden;
  }
`

const Container = styled.div`
  // padding: ${rhythm(4)} ${rhythm(1)} ${rhythm(1)};
  padding: ${rhythm(3)} 0 0;
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
  background: rgba(200, 0, 0, 0.2);
  z-index: 500;
`

const SecondaryLinks = styled.div`
`

const StyledLink = styled(SpringLink)`
  margin-left: 0.5em;
`

const themes = {
  light: {
    background: '#fff',
    foreground: '#222',
  },
  dark: {
    background: '#222',
    foreground: '#e1e1e1',
  },
}

const GlobalWithTheme = withTheme(Global)

class Layout extends React.Component {
  state = {
    darkTheme: false
  }

  render() {
    const { location, title, children } = this.props

    const theme = this.state.darkTheme ? themes.dark : themes.light

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Global
            styles={globalStyles(theme)}
          />

          <Header>
            <SpringLink
              to={`/`}
            >
              Home
            </SpringLink>

            <SecondaryLinks>
              <button
                onClick={e => {
                  e.preventDefault();
                  this.setState(state => ({
                    darkTheme: !state.darkTheme
                  }))
                }}
              >
                Toggle
              </button>

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
      </ThemeProvider>
    )
  }
}

export default Layout
