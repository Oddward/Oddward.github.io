$(window).on('load', function() {

    //Popper
    // $('[data-toggle="tooltip"]').tooltip();

    //CONTACT

	//COPY butt - vanilla js
	let copyTxt = document.getElementsByClassName('button.copyButt');
	copyTxt.select();
	copyTxt.setSelectionRange(0, 9999);
	document.execCommand("copy");

	// copyTxt = (click(function(){
    // 	try{

    // 		this.siblings('input.toCopy').select();      
    // 		document.execCommand("copy");
    // 		this.attr('data-original-title','Email successfullly copied!').hover().tooltip('show');
    // 	}
    // 	catch(err){
    // 		// alert(e);
    // 		alert('Failed to copy email. Browser not properly supported.')
    // 	}
    	
	// }));

	//Form subject
	var namedsub;
	var prefix = 'Via github pages';
	var name;
	let sender = document.getElementById('sender');
	sender.blur(function(){
		name = sender.value;
		if (sender.value) {
			name = ' - ' + name;
		}
		namedsub = prefix + name;
		document.getElementById('form-subject').getAttribute('value', namedsub);
		document.getElementById('subtext').text;
	})
	// $('#sender').blur(function(){
	// 	$name = $('#sender').val();
	// 	if ($('#sender').val()) {
	// 		$name = ' - ' + $name;
	// 	}
	// 	$namedsub = $prefix + $name;
	// 	$('#form-subject').attr('value',$namedsub);
	// 	$('#subtext').text($namedsub);
	// })
	let subject = document.getElementById('subject');
	subject.change(function(){
		prefix = subject.options[subject.selectedIndex].text;
		namedsub = prefix;
		if (name != null) {
			namedsub += name;
		}
		document.getElementById('form-subject').setAttribute('value', namedsub);
		document.getElementById('subtext').text(namedsub);
	})
	// $('#subject').change(function() {
	// 	$prefix = $('#subject').find(":selected").val();
	// 	$namedsub = $prefix;
	// 	if ($name != null) {
	// 		$namedsub += $name;
	// 	}
	// 	$('#form-subject').attr('value',$namedsub);
	// 	$('#subtext').text($namedsub);
	// });
    window.instgrm.Embeds.process();
}
)