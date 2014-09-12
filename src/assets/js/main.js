(function() {
  $(function() {
    var $contactLinks, $content, $htmlBody, $knowtifyGallery, $orchidGallery, $scrollTop, $spaceGallery, $tallerMoureGallery, knowtifyPath, orchidPath, spacePath, tallerMourePath;
    $scrollTop = $(".scrollTop");
    $htmlBody = $("html, body");
    $content = $(".content");
    $contactLinks = $(".contact-links .links");
    $knowtifyGallery = $("#knowtify-gallery");
    knowtifyPath = "/assets/img/knowtify";
    $tallerMoureGallery = $("#taller-moure-gallery");
    tallerMourePath = "/assets/img/taller-moure";
    $orchidGallery = $("#orchid-gallery");
    orchidPath = "/assets/img/orchid";
    $spaceGallery = $("#space-gallery");
    spacePath = "/assets/img/space";
    String.prototype.titleize = function() {
      if (typeof this === "undefined" || this === null) {
        return "";
      }
      return String(this).replace(/(?:^|\s)\S/g, function(c) {
        return c.toUpperCase();
      });
    };
    FastClick.attach(document.body);
    $scrollTop.on("click", function(e) {
      e.preventDefault();
      return $htmlBody.animate({
        scrollTop: 0
      }, 800, "easeInOutCubic");
    });
    $knowtifyGallery.on("click", function(e) {
      e.preventDefault();
      return $.swipebox([
        {
          href: "" + knowtifyPath + "/knowtify-desktop.jpg"
        }, {
          href: "" + knowtifyPath + "/knowtify-mobile.jpg"
        }, {
          href: "" + knowtifyPath + "/knowtify-logomarks.jpg"
        }, {
          href: "" + knowtifyPath + "/knowtify-colors.jpg"
        }, {
          href: "" + knowtifyPath + "/knowtify-type.jpg"
        }
      ]);
    });
    $orchidGallery.on("click", function(e) {
      e.preventDefault();
      return $.swipebox([
        {
          href: "" + orchidPath + "/orchid-cover.jpg"
        }, {
          href: "" + orchidPath + "/orchid-web.jpg"
        }, {
          href: "" + orchidPath + "/orchid-dashboard.jpg"
        }, {
          href: "" + orchidPath + "/orchid-ipad.jpg"
        }, {
          href: "" + orchidPath + "/orchid-ipad2.jpg"
        }
      ]);
    });
    $tallerMoureGallery.on("click", function(e) {
      e.preventDefault();
      return $.swipebox([
        {
          href: "" + tallerMourePath + "/taller-moure-letter.jpg"
        }, {
          href: "" + tallerMourePath + "/taller-moure-envelope.jpg"
        }, {
          href: "" + tallerMourePath + "/taller-moure-card.jpg"
        }, {
          href: "" + tallerMourePath + "/taller-moure-logomarks.jpg"
        }, {
          href: "" + tallerMourePath + "/taller-moure-colors.jpg"
        }, {
          href: "" + tallerMourePath + "/taller-moure-type.jpg"
        }
      ]);
    });
    $spaceGallery.on("click", function(e) {
      e.preventDefault();
      return $.swipebox([
        {
          href: "" + spacePath + "/luna.jpg"
        }
      ]);
    });
    mixpanel.track("Page Viewed", {
      "Page Name": document.title,
      "URL": window.location.pathname
    });
    $content.on("click", ".work-links a", function(e) {
      var $this, linkType, workType;
      $this = $(this);
      workType = $this.parents(".work-links").data("workType").titleize();
      linkType = $this.data("workLink").titleize();
      return mixpanel.track("Work Link Clicked", {
        "Work Type": workType,
        "Link Type": linkType
      });
    });
    return $contactLinks.on("click", "a", function(e) {
      var linkType;
      linkType = $(this).last().data("contactLink").titleize();
      return mixpanel.track("Contact Link Clicked", {
        "Link Type": linkType
      });
    });
  });

}).call(this);
