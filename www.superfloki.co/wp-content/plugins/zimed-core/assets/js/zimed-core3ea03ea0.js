(function ($) {
  "use strict";

  var WidgetZIMEDMailchimpHandler = function () {
    if ($(".mc-form").length) {
      $(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          }
        });
      });
    }
  };

  var WidgetZIMEDFAQHandler = function () {
    if ($(".accrodion-grp").length) {
      var accrodionGrp = $(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().parent().addClass("active");
                $(this)
                  .parent()
                  .parent()
                  .find(".accrodion-content")
                  .slideDown();
              }
            });
        });
      });
    }
  };

  var WidgetZIMEDTestimonialsHandler = function () {
    if ($(".testimonials-slider").length) {
      $(".testimonials-slider").bxSlider({
        // adaptiveHeight: true,
        auto: true,
        controls: true,
        nextText: '<i class="zimed-icon-right-arrow"></i>',
        prevText: '<i class="zimed-icon-left-arrow"></i>',
        pause: 5000,
        speed: 500,
        pager: true,
        pagerCustom: ".testimonials-slider-pager-one, .testimonials-slider-pager-two"
      });
    }

    if ($(".testimonials-two").length) {
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");

      var currentThumbBtn = $(".testimonials-two__button__current-btn");
      var prevThumbBtn = $(".testimonials-two__button__prev-btn");
      var nextThumbBtn = $(".testimonials-two__button__next-btn");

      var slidesPerPage = 1; //globaly define number of elements per page
      var syncedSecondary = true;

      sync1
        .owlCarousel({
          items: 1,
          smartSpeed: 700,
          autoplayHoverPause: true,
          nav: false,
          autoplay: true,
          dots: false,
          loop: true,
          autoplayTimeout: 5000,
          responsiveRefreshRate: 5000,
          onInitialize: callThumbOnNav,
          onTranslate: callThumbOnNav,
          navText: [
            '<i class="catch fa fa-angle-right"></i>',
            '<i class="catch fa fa-angle-left"></i>'
          ]
        })
        .on("changed.owl.carousel", syncPosition);

      sync2
        .on("initialized.owl.carousel", function (e) {
          sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
          // loop: true,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          smartSpeed: 700,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 5000
        })
        .on("changed.owl.carousel", syncPosition2);

      function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }

        //end block

        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2.find(".owl-item.active").first().index();
        var end = sync2.find(".owl-item.active").last().index();

        if (current > end) {
          sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
          sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
      }

      function syncPosition2(el) {
        if (syncedSecondary) {
          var number = el.item.index;
          sync1.data("owl.carousel").to(number, 100, true);
        }
      }

      function callThumbOnNav(e) {
        var idx = e.item.index;
        var currentThumb = sync1
          .find(".item")
          .eq(idx)
          .find(".testimonials-two__single")
          .data("thumb-img");
        var nxtThumb = sync1
          .find(".item")
          .eq(idx + 1)
          .find(".testimonials-two__single")
          .data("thumb-img");
        var prvThumb = sync1
          .find(".item")
          .eq(idx - 1)
          .find(".testimonials-two__single")
          .data("thumb-img");

        prevThumbBtn.css("background-image", "url(" + prvThumb + ")");
        nextThumbBtn.css("background-image", "url(" + nxtThumb + ")");
        currentThumbBtn.css("background-image", "url(" + currentThumb + ")");
      }

      sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
      });

      nextThumbBtn.on("click", function (e) {
        sync1.trigger("next.owl.carousel");
        e.preventDefault();
      });
      prevThumbBtn.on("click", function (e) {
        sync1.trigger("prev.owl.carousel");
        e.preventDefault();
      });
    }
  };
  var WidgetZIMEDPricingHandler = function () {
    if ($("#switch-toggle-tab").length) {
      var toggleSwitch = $("#switch-toggle-tab label.switch");
      var TabTitle = $("#switch-toggle-tab li");
      // hidden show deafult;
      $(".pricing-one .pricing-box").fadeOut();
      $(".pricing-one .pricing-box.active").fadeIn();

      TabTitle.find("a").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        if (false === $(target).hasClass("active")) {
          TabTitle.removeClass("active");
          $(this).parent().addClass("active");
          $(".pricing-one .pricing-box").fadeOut().removeClass("active");
          $(target).fadeIn().addClass("active");
          TabTitle.find(".switch").toggleClass("off");
        }
      });

      toggleSwitch.on("click", function () {
        let defaultActive = $(".pricing-one .pricing-box.active").attr("id");
        let inActive = $(".pricing-one .pricing-box:not(.active)").attr("id");
        $("#" + defaultActive)
          .fadeOut()
          .removeClass("active");
        $("#" + inActive)
          .fadeIn()
          .addClass("active");
        $("#switch-toggle-tab li." + defaultActive).removeClass("active");
        $("#switch-toggle-tab li." + inActive).addClass("active");
        $(this).toggleClass("off");
      });
    }
  };

  var WidgetZIMEDOwlHandler = function () {
    if ($(".thm__owl-carousel").length) {
      $(".thm__owl-carousel").each(function () {
        var Self = $(this);
        var carouselOptions = Self.data("options");
        var carouselPrevSelector = Self.data("carousel-prev-btn");
        var carouselNextSelector = Self.data("carousel-next-btn");
        var thmCarousel = Self.owlCarousel(carouselOptions);
        if (carouselPrevSelector !== undefined) {
          $(carouselPrevSelector).on("click", function () {
            thmCarousel.trigger("prev.owl.carousel");
            return false;
          });
        }
        if (carouselNextSelector !== undefined) {
          $(carouselNextSelector).on("click", function () {
            thmCarousel.trigger("next.owl.carousel");
            return false;
          });
        }
      });
    }
  };

  var WidgetZIMEDFunfactHandler = function () {
    if ($(".counter").length) {
      $(".counter").counterUp({
        delay: 10,
        time: 3000
      });
    }
  };

  var WidgetZIMEDVideoHandler = function () {
    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
      });
    }
  };

  var WidgetZIMEDProgressHandler = function () {
    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
  };
  var WidgetZIMEDFeatureHandler = function () {
    if ($(".feature-one__tab-title").length) {
      var title = $(".feature-one__tab-title").find("li");
      title.on("click", function (e) {
        e.preventDefault();
        var self = $(this);
        var index = self.index();
        title.removeClass("active");
        self.addClass("active");
        $(".feature-one__tab-content").hide();
        $(".feature-one__tab-content").eq(index).fadeIn(1000);
      });
    }
  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-footer-mc.default",
      WidgetZIMEDMailchimpHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-faq.default",
      WidgetZIMEDFAQHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-testimonials.default",
      WidgetZIMEDTestimonialsHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-pricing.default",
      WidgetZIMEDPricingHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetZIMEDOwlHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-funfact.default",
      WidgetZIMEDFunfactHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-video.default",
      WidgetZIMEDVideoHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-cta-two.default",
      WidgetZIMEDProgressHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/zimed-feature.default",
      WidgetZIMEDFeatureHandler
    );
  });
})(jQuery);