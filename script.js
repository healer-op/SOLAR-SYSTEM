$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});

// SUHANI WAS HERE UwU

function Suhani(){
  let mass = prompt("ENTER YOUR WIEGHT IN KG");
  mass = Math.round(parseFloat(mass));

  document.getElementById("mer").innerHTML = `Mercury ${Math.round(0.377*mass)}kg`
  document.getElementById("ven").innerHTML = `Venus ${Math.round(0.904*mass)}kg`
  document.getElementById("ear").innerHTML = `Earth ${Math.round(mass)}kg`
  document.getElementById("mar").innerHTML = `Mars ${Math.round(0.38*mass)}kg`
  document.getElementById("jup").innerHTML = `Jupiter ${Math.round(2.53*mass)}kg`
  document.getElementById("sat").innerHTML = `Saturn ${Math.round(1.065*mass)}kg`
  document.getElementById("ura").innerHTML = `Uranus ${Math.round(0.886*mass)}kg`
  document.getElementById("nep").innerHTML = `Neptune ${Math.round(1.14*mass)}kg`
}

Suhani()