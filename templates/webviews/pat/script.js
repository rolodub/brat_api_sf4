//JS du footer

$(document).ready(function() {
    $('.navbar').append('<input type="radio" name="menu" id="un" checked><input type="radio" name="menu" id="deux"><input type="radio" name="menu" id="trois"><input type="radio" name="menu" id="quatre"><input type="radio" name="menu" id="cinq"><div class="list"><div class="link-wrap"><label for="un"><i class="fa fa-home"></i></label><label for="deux"><i class="fa fa-search"></i></label><label for="trois"><i class="fa fa-map-marker"></i></label><label for="quatre"><i class="fa fa-user"></i></label><label for="cinq"><i class="fa fa-plus"></i></label></div></div>');
});

// JS du slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 100, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
