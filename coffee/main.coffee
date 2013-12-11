jQuery ->
  console.log('ready')
  alert('ready')
  # Scroll to top
  $('.scrollTop').on 'click', (e) ->
    e.preventDefault()
    $('html, body').animate
      scrollTop: 0
    , 800, 'easeInOutCubic'

  # Min Read
  $('.min-read').on 'click', (e) ->
    e.preventDefault();
    $('article').minRead()
