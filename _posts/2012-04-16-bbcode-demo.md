---
layout: post
title: BBCode Demo
excerpt: Demo of SCEditor used to produce BBCode
tags: [BBCode, demo, example]
categories:
    - Demo
    - BBCode
---
## BBCode demo

<link rel="stylesheet" href="/minified/themes/default.min.css" type="text/css" media="all" />
<script type="text/javascript" src="/minified/jquery.sceditor.bbcode.min.js"> </script>
<script>$(function() {
	$('#demo-bbcode').sceditor({
		style: '/minified/jquery.sceditor.default.min.css',
		emoticonsRoot: '/',
		plugins: 'bbcode'
	});
});</script>

<textarea style="width:600px; height:300px" id="demo-bbcode">This [b]is[/b] [color=#ff0000]a[/color] [size=3]demo[/size] :).</textarea><!--more-->

## Code behind

### Include the JS &amp; CSS:

<pre class="prettyprint linenums">
&lt;!-- Include jQuery, can be omitted if already included --&gt;
&lt;script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"&gt;&lt;/script&gt;

&lt;!-- Include the default SCEditor theme --&gt;
&lt;link rel="stylesheet" href="minified/jquery.sceditor.min.css" type="text/css" media="all" /&gt;

&lt;!-- Include SCEditor's JS --&gt;
&lt;script type="text/javascript" src="minified/jquery.sceditor.bbcode.min.js">&lt;/script&gt;</pre>


### Initialize SCEditor:

<pre class="prettyprint linenums">
&lt;script&gt;
$(function() {
	// Convert all textareas to SCEditor instances
	// Change the "textarea" to convert specific textareas
	$("textarea").sceditor({

		// Load the BBCode plugin
		plugins: "bbcode",

		// Use jquery.sceditor.default.min.css to style the content
		style: "/minified/jquery.sceditor.default.min.css"
	});
});
&lt;/script&gt;
</pre>

### Finished!

That's it, any textareas on the page should now be instances of SCEditor.
