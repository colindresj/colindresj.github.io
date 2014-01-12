$ ->

  $scrollTop = $(".scrollTop")
  $htmlBody = $("html, body")
  $content = $(".content")
  $contactLinks = $(".contact-links .links")

  # Gallery vars
  $knowtifyGallery = $("#knowtify-gallery")
  $tallerMoureGallery = $("#taller-moure-gallery")
  $orchidGallery = $("#orchid-gallery")
  $appleTvGallery = $("#apple-tv-gallery")

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
      href: "/assets/img/knowtify/knowtify-desktop.jpg"
    ,
      href: "/assets/img/knowtify/knowtify-mobile.jpg"
    ,
      href: "/assets/img/knowtify/knowtify-logomarks.jpg"
    ,
      href: "/assets/img/knowtify/knowtify-colors.jpg"
    ,
      href: "/assets/img/knowtify/knowtify-type.jpg"
    ]

  $orchidGallery.on "click", (e) ->
    e.preventDefault()
    $.swipebox [
      href: "/assets/img/orchid/orchid-cover.jpg"
    ,
      href: "/assets/img/orchid/orchid-web.jpg"
    ,
      href: "/assets/img/orchid/orchid-dashboard.jpg"
    ,
      href: "/assets/img/orchid/orchid-ipad.jpg"
    ,
      href: "/assets/img/orchid/orchid-ipad2.jpg"
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

