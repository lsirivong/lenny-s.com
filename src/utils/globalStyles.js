import { css } from 'linaria'
import { rhythm } from '../utils/typography'
import {
  themeTransitionDuration,
  themeTransitionEase
} from './animations'

export default css`
  :global() {
    * {
      box-sizing: border-box;
    }

    html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%
    }

    article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary {
      display: block
    }

    audio,canvas,progress,video {
      display: inline-block
    }

    audio:not([controls]) {
      display: none;
      height: 0
    }

    progress {
      vertical-align: baseline
    }

    [hidden],template {
      display: none
    }

    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects
    }

    a:active,a:hover {
      outline-width: 0
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted
    }

    b,strong {
      font-weight: inherit;
      font-weight: bolder
    }

    dfn {
      font-style: italic
    }

    h1 {
      font-size: 2em;
      margin: .67em 0
    }

    mark {
      background-color: #ff0;
      color: #000
    }

    small {
      font-size: 80%
    }

    sub,sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
    }

    sub {
      bottom: -.25em
    }

    sup {
      top: -.5em
    }

    img {
      border-style: none
    }

    svg:not(:root) {
      overflow: hidden
    }

    code,kbd,pre,samp {
      font-family: monospace,monospace;
      font-size: 1em
    }

    figure {
      margin: 1em 40px
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible
    }

    button,input,optgroup,select,textarea {
      font: inherit;
      margin: 0
    }

    optgroup {
      font-weight: 700
    }

    button,input {
      overflow: visible
    }

    button,select {
      text-transform: none
    }

    [type=reset],[type=submit],button,html [type=button] {
      -webkit-appearance: button
    }

    [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
      border-style: none;
      padding: 0
    }

    [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
      outline: 1px dotted ButtonText
    }

    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: .35em .625em .75em
    }

    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal
    }

    textarea {
      overflow: auto
    }

    [type=checkbox],[type=radio] {
      box-sizing: border-box;
      padding: 0
    }

    [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
      height: auto
    }

    [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
    }

    [type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
      -webkit-appearance: none
    }

    ::-webkit-input-placeholder {
      color: inherit;
      opacity: .54
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
    }

    html {
      font: 112.5%/1.5 'Inconsolata','Courier',monospace;
      box-sizing: border-box;
      overflow-y: scroll;
    }

    * {
      box-sizing: inherit;
    }

    *:before {
      box-sizing: inherit;
    }

    *:after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Courier',monospace;
      .wf-inconsolata-n4-active & {
        font-family: 'Inconsolata','Courier',monospace;
      }
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: "kern", "liga", "clig", "calt";
      -ms-font-feature-settings: "kern", "liga", "clig", "calt";
      -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
      font-feature-settings: "kern", "liga", "clig", "calt";
    }

    img {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    h1 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2rem;
      line-height: 1.1;
    }

    h2 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.51572rem;
      line-height: 1.1;
    }

    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.31951rem;
      line-height: 1.1;
    }

    h4 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }

    h5 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.87055rem;
      line-height: 1.1;
    }

    h6 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.81225rem;
      line-height: 1.1;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Georgia',serif;
      .wf-bitter-n7-active & {
        font-family: 'Bitter','Georgia',serif;
      }
    }

    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    ul {
      margin-left: 1.5rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      list-style-position: outside;
      list-style-image: none;
    }

    ol {
      margin-left: 1.5rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      list-style-position: outside;
      list-style-image: none;
    }

    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    p {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    pre {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      font-size: 0.85rem;
      line-height: 1.5rem;
    }

    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      border-collapse: collapse;
      width: 100%;
    }

    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    blockquote {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.5rem - 1px);
      background: hsla(0,0%,0%,0.2);
      border: none;
      height: 1px;
    }

    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.5rem;
    }

    b {
      font-weight: bold;
    }

    strong {
      font-weight: bold;
    }

    dt {
      font-weight: bold;
    }

    th {
      font-weight: bold;
    }

    li {
      margin-bottom: calc(1.5rem / 2);
    }

    ol li {
      padding-left: 0;
    }

    ul li {
      padding-left: 0;
    }

    li > ol {
      margin-left: 1.5rem;
      margin-bottom: calc(1.5rem / 2);
      margin-top: calc(1.5rem / 2);
    }

    li > ul {
      margin-left: 1.5rem;
      margin-bottom: calc(1.5rem / 2);
      margin-top: calc(1.5rem / 2);
    }

    blockquote *:last-child {
      margin-bottom: 0;
    }

    li *:last-child {
      margin-bottom: 0;
    }

    p *:last-child {
      margin-bottom: 0;
    }

    li > p {
      margin-bottom: calc(1.5rem / 2);
    }

    code {
      font-size: 0.85rem;
      line-height: 1.5rem;
    }

    kbd {
      font-size: 0.85rem;
      line-height: 1.5rem;
    }

    samp {
      font-size: 0.85rem;
      line-height: 1.5rem;
    }

    abbr {
      border-bottom: 1px dotted hsla(0,0%,0%,0.5);
      cursor: help;
    }

    acronym {
      border-bottom: 1px dotted hsla(0,0%,0%,0.5);
      cursor: help;
    }

    abbr[title] {
      border-bottom: 1px dotted hsla(0,0%,0%,0.5);
      cursor: help;
      text-decoration: none;
    }

    thead {
      text-align: left;
    }

    td,th {
      text-align: left;
      border-bottom: 1px solid hsla(0,0%,0%,0.12);
      font-feature-settings: "tnum";
      -moz-font-feature-settings: "tnum";
      -ms-font-feature-settings: "tnum";
      -webkit-font-feature-settings: "tnum";
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.75rem;
      padding-bottom: calc(0.75rem - 1px);
    }

    th:first-child,td:first-child {
      padding-left: 0;
    }

    th:last-child,td:last-child {
      padding-right: 0;
    }

    body {
      margin: 0 0 3rem;
      color: var(--color-foreground);
      background: var(--color-background);
      transition: background ${themeTransitionDuration} ${themeTransitionEase}, color ${themeTransitionDuration} ${themeTransitionEase};
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
