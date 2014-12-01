import * as $ from "jQuery";

export default function() {
  let $knowtifyGallery = $('#knowtify-gallery'),
      $tallerMoureGallery = $('#taller-moure-gallery'),
      $orchidGallery = $('#orchid-gallery'),
      $spaceGallery = $('#space-gallery');

  $knowtifyGallery.on('click', function(e) {
    e.preventDefault();

    let knowtifyPath = '/assets/images/knowtify';

    $.swipebox([
      { href: `${knowtifyPath}/knowtify-desktop.jpg` },
      { href: `${knowtifyPath}/knowtify-mobile.jpg` },
      { href: `${knowtifyPath}/knowtify-logomarks.jpg` },
      { href: `${knowtifyPath}/knowtify-colors.jpg` },
      { href: `${knowtifyPath}/knowtify-type.jpg` }
    ]);
  });

  $orchidGallery.on('click', function(e) {
    e.preventDefault();

    let orchidPath = '/assets/images/orchid';

    $.swipebox([
      { href: `${orchidPath}/orchid-cover.jpg` },
      { href: `${orchidPath}/orchid-web.jpg` },
      { href: `${orchidPath}/orchid-dashboard.jpg` },
      { href: `${orchidPath}/orchid-ipad.jpg` },
      { href: `${orchidPath}/orchid-ipad2.jpg` }
    ]);
  });


  $tallerMoureGallery.on('click', function(e) {
    e.preventDefault();

    let tallerMourePath = '/assets/images/taller-moure';

    $.swipebox([
      { href: `${tallerMourePath}/taller-moure-letter.jpg` },
      { href: `${tallerMourePath}/taller-moure-envelope.jpg` },
      { href: `${tallerMourePath}/taller-moure-card.jpg` },
      { href: `${tallerMourePath}/taller-moure-logomarks.jpg` },
      { href: `${tallerMourePath}/taller-moure-colors.jpg` },
      { href: `${tallerMourePath}/taller-moure-type.jpg` }
    ]);
  });

  $spaceGallery.on('click', function(e) {
    e.preventDefault();

    let spacePath = '/assets/images/space';

    $.swipebox([
      { href: `${spacePath}/luna.jpg` }
    ]);
  });
}
