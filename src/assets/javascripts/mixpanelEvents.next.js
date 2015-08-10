import titleizeString from './titleize-string.next';

export default function() {
  if (window.mixpanel) {
    mixpanel.track('Page Viewed', {
      'Page Name': document.title,
      'URL': window.location.pathname
    });

    const contactList = document.getElementsByClassName('contact__list')[0];

    contactList && contactList.addEventListener('click', e => {
      const link = e.target.tagName === 'A' ? e.target : null;

      if (!link) return null;

      const linkType = titleizeString(link.getAttribute('data-contact-link'));

      mixpanel.track('Contact Link Clicked', {
        'Link Type': linkType
      });
    });
  }
}
