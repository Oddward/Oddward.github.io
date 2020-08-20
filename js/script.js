document.onload = function() {

    //Popper
    // $('[data-toggle="tooltip"]').tooltip();
	//COPY butt - vanilla js
	let copyTxt = document.getElementsByClassName('copyButt');
	copyTxt.focus();
	copyTxt.select();
	copyTxt.setSelectionRange(0, 9999);
	try {
		document.execCommand("copy");
	} catch (error) {
		'It looks like the email could not be copied properly. You can still try to paste it somewhere though.'
	}

	// Menu butt
	// menu = document.getElementById('menu-butt');
	// overlay = document.getElementById('navbarStuff');
	document.getElementById('menu-butt').onclick = function() {
		this.classList.toggle('opened');
		document.getElementById('navbarStuff').classList.toggle('block');
	}

	//Form subject
	var namedsub;
	var prefix = 'Via github pages';
	var name;
	let sender = document.getElementById('sender');
	sender.onblur = function(){
		name = sender.value;
		console.log(name);
		if (name) {
			name = ' - ' + name;
			console.log(name);
		}
		namedsub = prefix + name;
		document.getElementById('form-subject').setAttribute('value', namedsub);
		document.getElementById('subtext').textContent = namedsub;
	}
	let subject = document.getElementById('subject');
	subject.onchange = function(){
		prefix = subject.options[subject.selectedIndex].textContent;
		namedsub = prefix;
		if (name) {
			namedsub += name;
		}
		document.getElementById('form-subject').setAttribute('value', namedsub);
		document.getElementById('subtext').textContent = namedsub;
	}
    // window.instgrm.Embeds.process();
}