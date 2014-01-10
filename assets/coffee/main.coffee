$ ->

  $scrollTop = $(".scrollTop")
  $htmlBody = $("html, body")

  FastClick.attach document.body

  # Scroll to top
  $scrollTop.on "click", (e) ->
    e.preventDefault()
    $htmlBody.animate
      scrollTop: 0
    , 800, 'easeInOutCubic'
