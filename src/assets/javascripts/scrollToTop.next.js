import * as $ from "jQuery";

export default function() {
  let $scrollTop = $('.scrollTop'),
      $htmlBody = $('html, body');

  $scrollTop.on('click', function(e) {
    e.preventDefault();

    $htmlBody.animate({
      scrollTop: 0
    }, 800, 'easeInOutCubic');
  });
}
