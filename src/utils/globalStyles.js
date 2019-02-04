import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import {
  themeTransitionDuration,
  themeTransitionEase
} from './animations'

export default theme => css`
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
