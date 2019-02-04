import React from 'react'
import { Link } from 'gatsby'
import { Global, css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { SpringLink, MySpring } from '../components/react-spring-animation'
import { ThemeProvider, withTheme } from 'emotion-theming'
import ScrollTracker from '../components/ScrollTracker'
import { ReactComponent as SunSvg } from '../components/svg/noun_sun_2148363.svg'
import { ReactComponent as MoonSvg } from '../components/svg/noun_Moon_2148355.svg'

const themeTransitionDuration = '1s'
const themeTransitionEase = 'ease-out'
const globalStyles = theme => css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.foreground};
    background: ${theme.background};
    transition: background ${themeTransitionDuration} ${themeTransitionEase}, color ${themeTransitionDuration} ${themeTransitionEase};
  }

  a {
    color: ${theme.accent};
    text-decoration: none;
    border-bottom: 1px solid ${theme.linkUnderline};
    transition: border 0.3s ease-out;
    &:hover {
      border-color: ${theme.accent};
    }
  }

  image, video {
    max-width: 100%;
  }

  code {
    font-family: Inconsolata, Courier, monospace;
    font-size: inherit;
    line-height: inherit;
    display: inline-block;
    background: ${theme.codeBackground};
    padding: 2px 8px;
    border-radius: 3px;

  }

  hr {
    width: 266px;
    margin: ${rhythm(1)} auto;
    background: 0;
    border: 0;
    border-bottom: 1px solid ${theme.codeBackground};
  }

  .tl-wrapper-outer {
    overflow: hidden;
  }
`

const Container = styled.div`
  padding: ${rhythm(3)} 0 0;
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rhythm(1)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${rhythm(1)};
  z-index: 500;
  background: ${({ theme }) => theme.background};
  transition: transform 300ms ease-out,
    background ${themeTransitionDuration} ${themeTransitionEase}, color ${themeTransitionDuration} ${themeTransitionEase};
  ${({ scrollDirection }) => `
    transform: translateY(${scrollDirection === 'down' ? -100 : 0}%);
  `}
  @media (min-width: 920px) {
    transform: none;
    background: transparent;
  }
`

const PrimaryLinks = styled.div`
  font-weight: bold;
`
const SecondaryLinks = styled.div`
`

const StyledLink = styled(SpringLink)`
  margin-right: 0.5em;
  display: inline-block;
`

const themes = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    codeBackground: `rgba(0, 0, 0, 0.1)`,
    accent: '#3a3277',
    alt: '#6772a9',
    linkUnderline: 'rgba(58, 50, 119, 0.20)',
  },
  dark: {
    background: '#000000',
    foreground: '#ffffff',
    codeBackground: `rgba(255, 255, 255, 0.25)`,
    accent: '#6772a9',
    alt: '#3a3277',
    linkUnderline: 'rgba(103, 114, 169, 0.5)',
  },
}

const GlobalWithTheme = withTheme(Global)

const iconStyles = css`
  width: 24px;
  height: 24px;
  display: block;
  position: relative;
  margin: 4px 3px 0;
  transform-origin: 12px 9px;
  transition: fill ${themeTransitionDuration} ${themeTransitionEase};
`

const MoonIcon = styled(MoonSvg)`
  ${iconStyles}
`
const SunIcon = styled(SunSvg)`
  ${iconStyles}
  margin-right: 2px;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const ToggleThemeButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 64px;
  height: 32px;
  padding: 0;
  cursor: pointer;
  border: 2px solid ${props => props.theme.foreground};
  border-radius: 32px;
  transition: border-color ${themeTransitionDuration} ${themeTransitionEase};
  ${SunIcon} {
    path {
      fill: ${props => props.isActive ? props.theme.foreground : props.theme.background};
    }
  }
  ${MoonIcon} {
    path {
      fill: ${props => props.isActive ? props.theme.background : props.theme.foreground};
    }
  }
  &:before {
    content: '';
    position: absolute;
    height: 32px;
    width: 32px;
    background: transparent;
    left: -2px;
    top: -2px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.foreground};
    transition: transform 250ms ease-out,
      background ${themeTransitionDuration} ${themeTransitionEase},
      border-color ${themeTransitionDuration} ${themeTransitionEase};
    transform: translateX(${props => props.isActive ? 0 : 32}px);
    background: ${props => props.theme.foreground};
  }
`

const ToggleTheme = ({ onClick, isActive }) => (
  <ToggleThemeButton
    onClick={onClick}
    isActive={isActive}
  >
    <MoonIcon /> <SunIcon />
  </ToggleThemeButton>
)

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

          <ScrollTracker>
            {({ scrollDirection }) => (
              <Header scrollDirection={scrollDirection}>
                <PrimaryLinks>
                  <StyledLink
                    to="/"
                  >
                    Home
                  </StyledLink>
                </PrimaryLinks>

                <SecondaryLinks>
                  <ToggleTheme
                    isActive={this.state.darkTheme}
                    onClick={e => {
                      e.preventDefault();
                      this.setState(state => ({
                        darkTheme: !state.darkTheme
                      }))
                    }}
                  />
                </SecondaryLinks>
              </Header>
            )}
          </ScrollTracker>

          <ContentContainer>
            {children}
          </ContentContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Layout
