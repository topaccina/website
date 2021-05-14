(function($) {
  "use strict";

  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  $("a.show-more-follow").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".twitter-card").removeClass("d-none");
    $(this).parent().remove();
  });

  $("a.show-more-quicktipps").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".quicktipp").addClass("d-flex").removeClass("d-none");
    $(this).parent().remove();
  });


  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }

    // Donation Modal
    $("[data-donate]").on("click", function(){
      if($("#donoModal #dono-address").length == 0){
        return;
      }

      var wallet = $(this).data("donate");
      $("#donoModal #dono-address").html(wallet);
      $("#donoModal").modal('show');
    });

    $("#media img.media-image").on("click", function(){
      var maxWidth = window.innerWidth * 0.75;
      $("#imageModal .modal-body img")
          .attr("src", $(this).attr("src"))
          .css("maxWidth", maxWidth);
      $("#imageModal").modal("show");
    });

    // Tweetwall ajax load
    const tweetCarousel = $("#tweetwall-carousel");
    if($("#tweetwall").length > 0 && tweetCarousel.length > 0){
      $.ajax({
        type: "GET",
        url: "/tweetwall.json"
      }).done(function(result) {
        try {
          var json = JSON.parse(result);
        } catch (e) {
          return false;
        }
        json.statuses.forEach(function(tweet){
          $("#tweetwall-carousel").append('<div class="tweetwall-wrap"><div class="tweetwall-item"></div><p><i class="icofont-check"></i> <a href="/quickreply/'+tweet.id_str+'">Quick reply to this tweet</a></p></div>');
          window.twttr.widgets.createTweetEmbed(
              tweet.id_str,
              $(".tweetwall-item:last").get(0),
              {
                conversation : 'all',    // or all
                cards        : 'hidden',  // or visible
                linkColor    : '#cc0000', // default is blue
                theme        : 'light'    // or dark
              }
          );
        });

        $("#tweetwall-carousel").owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          responsive: {
            0: { items: 1},
            768: { items: 1},
            900: { items: 2}
          }

        });

      });
    }

  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  $(".copypost").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var post = $(this).siblings("textarea").first().get(0);

    post.select();
    post.setSelectionRange(0, 99999);

    document.execCommand("copy");

    $.ajax({
      type: "POST",
      url: "/post/copy",
      data: { postId: $(this).parents(".post-box").data("id")},
    });

    alert("Copied the text: " + post.value);
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });



  // Porfolio isotope and filter
  $(window).on('load', function() {

    // If filter found (post page) -> use english. If not (profile page) do not use filter
    var filter = $("#postFilter .filter-active").data("filter");
    if(typeof filter === "undefined"){
      filter = "";
    }

    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
      filter: filter,
      sortBy: "weight",
      sortAscending: false,
      getSortData: {
        date: '[data-date]',
        weight: '[data-weight] parseInt'
      }
    });


    $(".portfolio-filters li").on('click', function() {
      $(this).parent().find("li").removeClass("filter-active");
      $(this).addClass('filter-active');

      var filter = $("#postFilter").find("li.filter-active").data('filter');
      var sort = $("#postSort").find("li.filter-active").data('sort');

      portfolioIsotope.isotope({
        filter: filter,
        sortBy: sort,
      });

      if(sort=="random"){
        portfolioIsotope.isotope("shuffle");
      }

      aos_init();
    });

    aos_init();
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  $("#surprisetweet").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var tweetLink = $(".directtweet:visible").filter("[data-type='post']").filter("[data-random='1']").random().attr("href");
    window.open(tweetLink);
  });

  $(".directtweet").on("click", function(){
    $.ajax({
      type: "POST",
      url: "/post/copy",
      data: {
        postId: $(this).parents(".post-box").data("id")
      },
    });
  });

  $(".mediadownload").on("click", function(){
    $.ajax({
      type: "POST",
      url: "/media/download",
      data: {
        mediaId: $(this).parents(".post-box").data("id")
      },
    });
  });

  $(".countusage").on("click", function(){
    var originalTweetId = $("[data-original-tweet]").data("original-tweet");
    if(!originalTweetId){
      return;
    }

    $.ajax({
      type: "POST",
      url: "/quickreply/countusage",
      data: {
        postId: $(this).parents(".post-box").data("id"),
        tweetId: originalTweetId
      },
    });
  });


})(jQuery);

$.fn.random = function() {
  var length = this.length > 10 ? 10 : this.length;
  var randomIndex = Math.floor(Math.random() * this.length);
  return jQuery(this[randomIndex]);
};