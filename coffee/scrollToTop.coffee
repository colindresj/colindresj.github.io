$('.scrollTop').on 'click', (e) ->
  e.preventDefault()
  $('html, body').animate
    scrollTop: 0
  , 800, 'easeInOutCubic'
