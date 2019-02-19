import { css } from 'linaria'
import { rhythm } from '../utils/typography'

export default css`
  :global() {
    * {
      box-sizing: border-box;
    }

    @media (max-width: 518px) {
      html {
        font-size: 100%;
      }
    }

    a {
      color: var(--color-accent);
      text-decoration: none;
      border-bottom: 1px solid var(--color-link-underline);
      transition: border 0.3s ease-out;
      &:hover {
        border-color: var(--color-accent);
      }
    }
    .gatsby-resp-image-link {
      border: 0;
    }

    image, video {
      max-width: 100%;
    }

    code {
      font-family: Inconsolata, Courier, monospace;
      font-size: inherit;
      line-height: inherit;
      display: inline-block;
      background: var(--color-code-background);
      padding: 2px 8px;
      border-radius: 3px;

    }

    hr {
      width: 266px;
      margin: ${rhythm(1)} auto;
      background: 0;
      border: 0;
      border-bottom: 1px solid var(--color-code-background);
    }

    .tl-wrapper-outer {
      overflow: hidden;
    }
  }
`
