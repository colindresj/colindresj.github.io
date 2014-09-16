$ ->

  $scrollTop    = $(".scrollTop")
  $htmlBody     = $("html, body")
  $content      = $(".content")
  $contactLinks = $(".contact-links .links")

  # Gallery vars
  $knowtifyGallery    = $("#knowtify-gallery")
  knowtifyPath        = "/assets/images/knowtify"
  $tallerMoureGallery = $("#taller-moure-gallery")
  tallerMourePath     = "/assets/images/taller-moure"
  $orchidGallery      = $("#orchid-gallery")
  orchidPath          = "/assets/images/orchid"
  $spaceGallery       = $("#space-gallery")
  spacePath           = "/assets/images/space"

  String::titleize = ->
    return ""  unless @?
    String(@).replace /(?:^|\s)\S/g, (c) ->
      c.toUpperCase()

  FastClick.attach document.body

  # -----------------
  # Scroll to  Top
  # -----------------
  $scrollTop.on "click", (e) ->
    e.preventDefault()
    $htmlBody.animate
      scrollTop: 0
    , 800, "easeInOutCubic"


  # -----------------
  # Galleries
  # -----------------
  $knowtifyGallery.on "click", (e) ->
    e.preventDefault()
    $.swipebox [
      href: "#{knowtifyPath}/knowtify-desktop.jpg"
    ,
      href: "#{knowtifyPath}/knowtify-mobile.jpg"
    ,
      href: "#{knowtifyPath}/knowtify-logomarks.jpg"
    ,
      href: "#{knowtifyPath}/knowtify-colors.jpg"
    ,
      href: "#{knowtifyPath}/knowtify-type.jpg"
    ]

  $orchidGallery.on "click", (e) ->
    e.preventDefault()
    $.swipebox [
      href: "#{orchidPath}/orchid-cover.jpg"
    ,
      href: "#{orchidPath}/orchid-web.jpg"
    ,
      href: "#{orchidPath}/orchid-dashboard.jpg"
    ,
      href: "#{orchidPath}/orchid-ipad.jpg"
    ,
      href: "#{orchidPath}/orchid-ipad2.jpg"
    ]

  $tallerMoureGallery.on "click", (e) ->
    e.preventDefault()
    $.swipebox [
      href: "#{tallerMourePath}/taller-moure-letter.jpg"
    ,
      href: "#{tallerMourePath}/taller-moure-envelope.jpg"
    ,
      href: "#{tallerMourePath}/taller-moure-card.jpg"
    ,
      href: "#{tallerMourePath}/taller-moure-logomarks.jpg"
    ,
      href: "#{tallerMourePath}/taller-moure-colors.jpg"
    ,
      href: "#{tallerMourePath}/taller-moure-type.jpg"
    ]

  $spaceGallery.on "click", (e) ->
    e.preventDefault()
    $.swipebox [
      href: "#{spacePath}/luna.jpg"
    ]

  # -----------------
  # Mixpanel Events
  # -----------------

  # Page Views
  mixpanel.track "Page Viewed",
    "Page Name": document.title
    "URL": window.location.pathname

  # Work Links
  $content.on "click", ".work-links a", (e) ->
    $this = $(@)
    workType = $this.parents(".work-links").data("workType").titleize()
    linkType = $this.data("workLink").titleize()

    mixpanel.track "Work Link Clicked",
      "Work Type": workType
      "Link Type": linkType

  # Contact Links
  $contactLinks.on "click", "a", (e) ->
    linkType = $(@).last().data("contactLink").titleize()

    mixpanel.track "Contact Link Clicked",
      "Link Type": linkType

