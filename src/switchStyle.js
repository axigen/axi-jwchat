style = "jwchat.css"; // fallback

// look for stylesheet
if (parent.stylesheet)
  style = parent.stylesheet;
/*else if (top.opener.top.stylesheet)
  style = top.opener.top.stylesheet;
else if (top.opener.opener.top.stylesheet)
	style = top.opener.opener.top.stylesheet;*/
else if (parent.parent.stylesheet)
  style = parent.parent.stylesheet;

document.write('<link rel="styleSheet" type="text/css" href="'+style+'">');
