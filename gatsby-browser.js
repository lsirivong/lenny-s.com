import WebFont from 'webfontloader'
import { wrapRootElement as wrap } from './wrap-root-element'

const onClientEntry = () => {
  WebFont.load({
    google: {
      families: ['Bitter:700', 'Inconsolata']
    }
  });
}

export {
  wrap as wrapRootElement,
  onClientEntry
}
