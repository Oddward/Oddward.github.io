// CREATE CHECK FOR READY STATE
function ready(fn){
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}
ready(function() {
	console.log('hello');
	//COPY butt - vanilla js
	let copyTxt = document.getElementById('copyE');
	let txt = document.getElementById('toCopy');
	copyTxt.onclick = function(){
		txt.focus();
		txt.select();
		txt.setSelectionRange(0, 9999);
		try {
			document.execCommand("copy");
		} catch (error) {
			'It looks like the email address could not be copied properly. You can still try to paste it somewhere.'
		}
	}

	// Menu butt
	document.getElementById('menu-butt').onclick = function() {
		toggleRes = document.getElementById('menu-icon').classList.toggle('opened');
		document.getElementById('navbarStuff').classList.toggle('hidden', toggleRes);
		console.log(document.getElementById('navbarStuff').classList.toggle('hidden'));
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
})