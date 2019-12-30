$(document).ready(function () {


  //login
  $("#loginBtn").click(function () {
    $("#login").show();
  });

  //register account
  $("#createBtn").click(function () {
    $("#createAccount").show();
  });

  //browseAllmodal
  $("#browseModalbtn").click(function () {
    $("#browseModal").show();
  });

  //browseAllmodal
  $("#footerLink").click(function () {
    $("#frameModal").hide();
    $("#cartModal").hide();
    $("#panelModal").hide();
    $(".right-sidebar").toggleClass("open");
    $(".toggle-right-sidebar").toggleClass("open");
    $("#browseModal").show();
  });

  $(".close").on("click", function () {
    $("#browseModal").hide();
    $("#frameModal").hide();
    $("#cartModal").hide();
    $("#panelModal").hide();
  });

  // $(".close-icon").click(function () {
  //   $("#login").hide();
  //   $("#createAccount").hide();
  // });

  $("#panelmodalBtn").on("click", function () {
    $("#panelModal").hide();
  });

  $(".close-modal-btn").click(function () {
    $(".modal").hide();
  });

  $(".mobile-close").click(function () {
    $(".right-sidebar").toggleClass("open");
    $(".toggle-right-sidebar").toggleClass("open");
  });

  //frameModal
  $("#frameModalbtn").click(function () {
    $("#frameModal").append($(".imgzoom-modal")).show();
  });

  //panelModal
  $("#panelModalbtn").click(function () {
    $("#panelModal").show();
  });

 

  $("#cartModal .list-rem").click(function () {
    $('.delete-modal').css('display', 'flex');
  });

  $("#quotationBtn").click(function () {
    $('.quotation-modal').css('display', 'flex');
  });
  
 //cartModal
 $("#cartModalbtn").click(function () {
  $(".right-sidebar").toggleClass("open");
  $(".toggle-right-sidebar").toggleClass("open");
  $("#cartModal").show();
});

  $(".toggle-right-sidebar").click(function () {
    $(".right-sidebar").toggleClass("open");
    $(".toggle-right-sidebar").toggleClass("open");
  });

  $('body').chardinJs();
  $('.helpBtn').on('click', function (e) {
    e.preventDefault();
    return ($('body').data('chardinJs')).toggle();
  });

  //landing page on click close
  $("#enterShowroom,#enterShowroommob").click(function () {
    $("#landingPage").hide();
    $(".page-wrapper").removeClass('d-none');
    $("body").toggleClass('overflow-hidden');
    $(".builder-infotable").show();
  });


});


