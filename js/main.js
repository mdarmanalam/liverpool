/*Menu handler*/

/* $(function() {
    $('nav li a').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('ul').find('.active').removeClass('active');
        $this.parent().addClass('active');

    });
});
 */
 
$(function(){
	var url = window.location.pathname;  
	var activePage = url.substring(url.lastIndexOf('/')+1);
	$('.nav li a').each(function(){  
	var currentPage = this.href.substring(this.href.lastIndexOf('/')+1);
		if (activePage == currentPage) {
		var $this = $(this);
		$this.closest('ul').find('.active').removeClass('active');
		$this.parent().addClass('active');		
		} 
	});
})

/*Gallery*/
$('#gaCarousel').carousel({
    interval: 4000
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#gaCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#gaCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});