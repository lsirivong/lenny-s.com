import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { SpringLink, MySpring } from '../components/react-spring-animation'
import ScrollTracker from '../components/ScrollTracker'
import { ReactComponent as SunSvg } from '../components/svg/noun_sun_2148363.svg'
import { ReactComponent as MoonSvg } from '../components/svg/noun_Moon_2148355.svg'

import { themeTransitionDuration, themeTransitionEase } from '../utils/animations'

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

const ToggleTheme = ({ onToggle, isActive }) => (
  <ToggleThemeButton
    onClick={onToggle}
    isActive={isActive}
  >
    <MoonIcon /> <SunIcon />
  </ToggleThemeButton>
)

const Nav = ({ darkTheme, onToggle }) => (
  <ScrollTracker>
    {({ scrollDirection }) => (
      <Header scrollDirection={scrollDirection}>
        <PrimaryLinks>
          <StyledLink
            to="/"
          >
            Home
          </StyledLink>

          <StyledLink
            to="/games/"
          >
            Games
          </StyledLink>
        </PrimaryLinks>

        <SecondaryLinks>
          <ToggleTheme
            isActive={darkTheme}
            onToggle={onToggle}
          />
        </SecondaryLinks>
      </Header>
    )}
  </ScrollTracker>
)

export default Nav
