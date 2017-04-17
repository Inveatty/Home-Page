$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy({
    scrollOffset:0
  });
});

var options = [
  {selector: '#staggered', offset: 500, callback: function(el){
    Materialize.showStaggeredList($(el));
    $("#call-1").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500});
  } },
  {selector: '#staggered2', offset: 500, callback: function() {
    Materialize.showStaggeredList($(el));
    $("#call-2").velocity({ backgroundColor: "#333", color: "#ef5350" }, {duration: 500})
  } },
];
Materialize.scrollFire(options);
