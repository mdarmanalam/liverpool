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