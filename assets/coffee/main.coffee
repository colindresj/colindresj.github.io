$ ->

  $scrollTop = $(".scrollTop")
  $htmlBody = $("html, body")
  $content = $(".content")
  $contactLinks = $(".contact-links .links")

  String::titleize = ->
    return ""  unless @?
    String(@).replace /(?:^|\s)\S/g, (c) ->
      c.toUpperCase()

  FastClick.attach document.body

  # Scroll to top
  $scrollTop.on "click", (e) ->
    e.preventDefault()
    $htmlBody.animate
      scrollTop: 0
    , 800, "easeInOutCubic"

  # -----------------
  # Mixpanel Events
  # -----------------

  # Page Views
  mixpanel.track "Page Viewed",
    "Page Name": document.title
    "URL": window.location.pathname

  # Work Links
  $content.on "click", ".work-links a", (e) ->
    workType = $(@).parents(".work-links").data("workType").titleize()
    linkType = $(@).data("workLink").titleize()

    mixpanel.track "Work Link Clicked",
      "Work Type": workType
      "Link Type": linkType

  # Contact Links
  $contactLinks.on "click", "a", (e) ->
    linkType = $(@).last().data("contactLink").titleize()

    mixpanel.track "Contact Link Clicked",
      "Link Type": linkType

