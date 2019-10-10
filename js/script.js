$(window).on('load', function() {
    
    //Popper
    $('[data-toggle="tooltip"]').tooltip();

    //detect scroll to bottom (migt make heavier)
    /*function getDocHeight() {
    	var d = document;
    	return Math.max(
    		d.body.scrollHeight, d.documentElement.scrollHeight,
    		d.body.offsetHeight, d.documentElement.offsetHeight,
    		d.body.clientHeight, d.documentElement.clientHeight
    	);
    }
    $(window).scroll(function() {
    	if($(window).scrollTop() + $(window).height() > (getDocHeight() - 100)){
    		$('#floating-container').hide(3000);
    	}
    })*/
}
)