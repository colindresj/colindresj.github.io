import * as $ from 'jQuery';
import * as attachFastClick from 'fastclick';
import scrollToTop from './scrollToTop.next';
import mixpanelEvents from './mixpanelEvents.next';

$(function() {
  scrollToTop();
  mixpanelEvents();
  attachFastClick(document.body);
});
