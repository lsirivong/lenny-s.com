import debug from 'debug';
import test from './modules/test';

test();

const log = debug('app:log');
if (ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}
