// Text Writer library

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Web Designer")
  .pauseFor(500)
  .deleteChars(9)
  .pauseFor(500)
  .typeString(" Developer")
  .pauseFor(500)
  .deleteChars(9)
  .pauseFor(500)
  .start();

//for Gym
effect(".infoGym", ".overlayGym", ".gym");

//for Leon
effect(".infoLeon", ".overlayLeon", ".leon");
//For TheBand
effect(".infoBand", ".overlayBand", ".band");
//For Kasper
effect(".infoKasper", ".overlayKasper", ".kasper");

function effect(classNameParent, classNameChild, elementID) {
  $(classNameParent).hover(
    function () {
      $(classNameChild).removeClass("d-none").addClass("d-flex");
      $(elementID).css("transform", "scale(1.1)");
    },
    function () {
      $(classNameChild).removeClass("d-flex").addClass("d-none");
      $(elementID).css("transform", "scale(1)");
    }
  );
}
// Check input Email in Hire Section
$("#hireBtn").click(function () {
  if (!$("#userEmail").val()) {
    $("#userEmail").addClass("warning");
    $("#userEmail").attr("placeholder", "Error, Please Insert Your Email");
  } else {
    if ($("#userEmail").val()) {
      $("#userEmail").removeClass("warning");
      window.open("mailto:kirllos1000@gmail.com");
    }
  }
});
