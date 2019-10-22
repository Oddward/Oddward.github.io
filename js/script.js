$(window).on('load', function() {

    //Popper
    $('[data-toggle="tooltip"]').tooltip();

    //CONTACT
    $('#contact-butt').click(function() {
    	$('#accordion').css({'opacity':0,'display':'none'});
    	$('#fullscreen-overlay').fadeIn('fast', 'linear');
    	$('#accordion').delay(300).slideDown('normal', 'linear').animate(
    		{opacity: 1}, {queue: false, duration: 'normal'})
    });
    $('#close-butt').click(function(){
    	$('#accordion').slideUp('normal', 'linear').animate(
    		{opacity: 0}, {queue: false, duration: 'normal'});
    	$('#fullscreen-overlay').delay(300).fadeOut('fast', 'linear')
    });

    //COPY butt
    $('button.copyButt').click(function(){
    	try{
    		$(this).siblings('input.toCopy').select();      
    		document.execCommand("copy");
    		$(this).attr('data-original-title','Email successfullly copied!').hover().tooltip('show');
    	}
    	catch(e){
    		// alert(e);
    		alert('Failed to copy email. Browser not properly supported.')
    	}
    	
	});

	//Form subject
	var $namedsub;
	var $prefix;
	var $name;
	$('#sender').blur(function(){
		$name = $('#sender').val();
		if ($prefix == null) {
			$prefix = 'Github page message - '
		}
		$namedsub = $prefix + $name;
		$('#form-subject').attr('value',$namedsub);
	})
	
	$('#subject').change(function() {
		prefix = $('#subject').find(":selected").val();
		$namedsub = prefix + $name;
		$('#form-subject').attr('value',$namedsub);
	});
    
}
)