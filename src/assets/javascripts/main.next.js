import * as attachFastClick from 'fastclick';
import { init as initSmoothScroll } from 'smooth-scroll';
import mixpanelEvents from './mixpanelEvents.next';

initSmoothScroll({ updateURL: false });
mixpanelEvents();
attachFastClick(document.body);
