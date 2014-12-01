import * as $ from 'jQuery';

export default function() {
  if (window.mixpanel) {
    let $content = $('.content'),
        $contactLinks = $('.contact-links .links');

    mixpanel.track('Page Viewed', {
      'Page Name': document.title,
      'URL': window.location.pathname
    });

    $content.on('click', '.work-links a', function(e) {
      let $this =$(this),
          workType = $this.parents('.work-links').data('workType'),
          linkType = $this.data('workLink').titleize();

      mixpanel.track('Work Link Clicked', {
        'Work Type': workType,
        'Link Type': linkType
      });
    });

    $contactLinks.on('click', 'a', function(e) {
      let linkType = $(this).last().data('contactLink').titleize();

      mixpanel.track('Contact Link Clicked', {
        'Link Type': linkType
      });
    });
  }
}
