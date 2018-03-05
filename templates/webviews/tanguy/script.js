$(document).ready(function() {  
    $(function() {
        $('.interface').hide();
    });
    $('.close-alert').click(function(){
        $('.disclaimer').hide();
    });
    var val_rechercher="";
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });
    $('.navbar').append('<input type="radio" name="menu" id="un" checked><input type="radio" name="menu" id="deux"><input type="radio" name="menu" id="trois"><input type="radio" name="menu" id="quatre"><input type="radio" name="menu" id="cinq"><div class="list"><div class="link-wrap"><label for="un"><i class="fa fa-home"></i></label><label for="deux"><i class="fa fa-search"></i></label><label for="trois"><i class="fa fa-map-marker"></i></label><label for="quatre"><i class="fa fa-user"></i></label><label for="cinq"><i class="fa fa-plus"></i></label></div></div>');
});