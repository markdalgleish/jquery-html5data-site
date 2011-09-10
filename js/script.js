(function(){
	var html5elements = ['header','section','footer'];
	for (var i = 0, iLen = html5elements.length; i < iLen; i++) {
		document.createElement(html5elements[i]);
	}
	
	window.onload = function(){
		var pres = document.getElementsByTagName('pre');
		for (var i = 0, iLen = pres.length; i < iLen; i++) {
			pres[i].className += ' prettyprint';
		}
		prettyPrint();
	};
	
	/* Thanks John Resig */
	function addEvent( obj, type, fn ) {
	  if ( obj.attachEvent ) {
	    obj['e'+type+fn] = fn;
	    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
	    obj.attachEvent( 'on'+type, obj[type+fn] );
	  } else
	    obj.addEventListener( type, fn, false );
	}

	addEvent(document.getElementById("github-ribbon"), 'click', function(){
		pageTracker._trackEvent("html5data", "GitHub", "Ribbon");
	});

	addEvent(document.getElementById("downloadbutton-top"), 'click', function(){
		pageTracker._trackEvent("html5data", "Download", "ButtonTop");
	});

	addEvent(document.getElementById("githubbutton-top"), 'click', function(){
		pageTracker._trackEvent("html5data", "GitHub", "ButtonTop");
	});

	addEvent(document.getElementById("blog"), 'click', function(){
		pageTracker._trackEvent("html5data", "Blog", "Footer");
	});

	addEvent(document.getElementById("license"), 'click', function(){
		pageTracker._trackEvent("html5data", "License", "Footer");
	});

	addEvent(document.getElementById("twitter-paragraph"), 'click', function(){
		pageTracker._trackEvent("html5data", "Twitter", "Paragraph");
	});

	addEvent(document.getElementById("github-profile"), 'click', function(){
		pageTracker._trackEvent("html5data", "GitHub", "Profile");
	});

	addEvent(document.getElementById("twitter"), 'click', function(){
		pageTracker._trackEvent("html5data", "Twitter", "Footer");
	});

	addEvent(document.getElementById("photo"), 'click', function(){
		pageTracker._trackEvent("html5data", "Photo", "Footer");
	});

	addEvent(document.getElementById("fathom"), 'click', function(){
		pageTracker._trackEvent("html5data", "Fathom", "Footer");
	});

	addEvent(document.getElementById("tmpload"), 'click', function(){
		pageTracker._trackEvent("html5data", "Tmpload", "Footer");
	});

})();