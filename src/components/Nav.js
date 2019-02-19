import React from 'react'
import { Link } from 'gatsby'
import { css } from 'linaria'
import { styled } from 'linaria/react'
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
  background: var(--color-background);
  transition: transform 300ms ease-out,
    background ${themeTransitionDuration} ${themeTransitionEase},
    color ${themeTransitionDuration} ${themeTransitionEase};

  @media (min-width: 920px) {
    transform: none;
    background: transparent;
  }
`

const Hide = css`
  transform: translateY(-100%);
`

const Show = css`
  transform: translateY(0);
`

const PrimaryLinks = styled.div`
  font-weight: bold;
`
const SecondaryLinks = styled.div`
`

const StyledLink = css`
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
  border: 2px solid var(--color-foreground);
  border-radius: 32px;
  transition: border-color ${themeTransitionDuration} ${themeTransitionEase};
  &:before {
    content: '';
    position: absolute;
    height: 32px;
    width: 32px;
    background: transparent;
    left: -2px;
    top: -2px;
    border-radius: 50%;
    border: 2px solid var(--color-foreground);
    transition: transform 250ms ease-out,
      background ${themeTransitionDuration} ${themeTransitionEase},
      border-color ${themeTransitionDuration} ${themeTransitionEase};
    transform: translateX(${props => props.isActive ? 0 : 32}px);
    background: var(--color-foreground);
  }
`

const IconForeground = css`
  path {
    fill: var(--color-foreground);
  }
`

const IconBackground = css`
  path {
    fill: var(--color-background);
  }
`

const ToggleTheme = ({ onToggle, isActive }) => (
  <ToggleThemeButton
    onClick={onToggle}
    isActive={isActive}
  >
    <MoonSvg className={`${iconStyles} ${isActive ? IconBackground : IconForeground}`} /> <SunSvg className={`${iconStyles} ${isActive ? IconForeground : IconBackground}`} />
  </ToggleThemeButton>
)

const Nav = ({ darkTheme, onToggle }) => (
  <ScrollTracker>
    {({ scrollDirection }) => (
      <Header className={scrollDirection === 'down' ? Hide : Show}>
        <PrimaryLinks>
          <SpringLink
            className={StyledLink}
            to="/"
          >
            Home
          </SpringLink>

          <SpringLink
            className={StyledLink}
            to="/games/"
          >
            Games
          </SpringLink>
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
