import { css } from 'linaria'

export default {
  light: css`
    --color-background: #ffffff;
    --color-foreground: #000000;
    --color-border: rgba(0, 0, 0, 0.2);
    --color-code-background: rgba(0, 0, 0, 0.1);
    --color-accent: #3a3277;
    --color-alt: #6772a9;
    --color-link-underline: rgba(58, 50, 119, 0.20);
  `,
  dark: css`
    --color-background: #000000;
    --color-foreground: #ffffff;
    --color-border: rgba(255, 255, 255, 0.5);
    --color-code-background: rgba(255, 255, 255, 0.25);
    --color-accent: #6772a9;
    --color-alt: #3a3277;
    --color-link-underline: rgba(103, 114, 169, 0.5);
  `,
}
