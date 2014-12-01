import * as $ from 'jQuery';
import * as attachFastClick from 'fastclick';
import scrollToTop from './scrollToTop.next';
import galleries from './galleries.next';
import mixpanelEvents from './mixpanelEvents.next';

$(function() {
  scrollToTop();
  galleries();
  mixpanelEvents();
  attachFastClick(document.body);
});
