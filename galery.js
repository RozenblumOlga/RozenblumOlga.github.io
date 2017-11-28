if(window.location.href.indexOf('#') != -1) {
	photoes = window.location.href.split('#');
	photo = photoes[1];
	getImg(photo);
	var new_href = window.location.href.slice(0,-5);
	window.location.href = new_href;
}

function getImg(photo) {
	window.location.href += "#" + photo;
	document.getElementById(photo).style.display = 'block';
	document.getElementById('wrap').style.display = 'block';
	
}

function press(event) {
	event.preventDefault();
	var elem = document.getElementById('search');
	var elems = elem.getElementsByClassName('unavailable');
	
	if(event.keyCode == 27) {
		document.getElementById('myModal').style.display = 'none';
		document.getElementById('wrap').style.display = 'none';
		for (var val of elems) {
	        if(val.style.display == 'block') {
	            val.style.display = 'none';
	            var new_href = window.location.href.slice(0,-5);
	            window.location.href = new_href;
	        }
	    }
	}

	if(event.keyCode == 39) {
		var index = 0;
		for(var val of elems) {
			index += 1;
	        if(val.style.display == 'block') {
	            val.style.display = 'none';
	            break;
	        }
	    }
	    if(index == elems.length) {
	    	index = 0;
	    }
	    elems[index].style.display = 'block';
	    var new_href = window.location.href.slice(0,-1) + (index + 1);
	    window.location.href = new_href;
	}

	if(event.keyCode == 37) {
		var index = 0;
		for(var val of elems) {
			index += 1;
	        if(val.style.display == 'block') {
	            val.style.display = 'none';
	            break;
	        }
	    }
	    if(index - 1 == 0) {
	    	index = elems.length + 1;
	    }
	    elems[index - 2].style.display = 'block';
	    var new_href = window.location.href.slice(0,-1) + (index - 1);
	    window.location.href = new_href;
	}

	if(event.keyCode == 112) {
		document.getElementById('myModal').style.display = 'block';
		document.getElementById('wrap').style.display = 'block';
	}
}

function remove() {
	document.getElementById('wrap').style.display = 'none';
	document.getElementById('myModal').style.display = 'none';
	var elem = document.getElementById('search');
	var elems = elem.getElementsByClassName('unavailable');
	for (var val of elems) {
        if(val.style.display == 'block') {
            val.style.display = 'none';
            var new_href = window.location.href.slice(0,-5);
            window.location.href = new_href;
        }
    }
}