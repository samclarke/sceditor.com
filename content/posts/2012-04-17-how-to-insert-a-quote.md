---
layout: post
title: How to insert quotes
excerpt: Breif example of how to insert a quote
tags: [HTML, BBCode, demo, example]
categories:
    - Demo
    - BBCode
    - HTML
---
## Quote demo

<link rel="stylesheet" href="/minified/themes/default.min.css" type="text/css" media="all" />
<script type="text/javascript" src="/minified/jquery.sceditor.bbcode.min.js"> </script>
<script>$(function() {
	$("#demo-quote").sceditor({
		plugins: 'bbcode',
		style: "/minified/jquery.sceditor.default.min.css",
		emoticonsRoot: '/'
	});
});

function insertQuote(includeAuthor)
{
	// first get the editor's instance
	var editor = $("#demo-quote").sceditor("instance");

	// execute the insert command
	if(includeAuthor)
		editor.insert('[quote=author]This is an [b]example[/b] quote.[/quote]');
	else
		editor.insert('[quote]This is an [b]example[/b] quote.[/quote]');
}

</script>

<textarea style="width:600px; height:300px" id="demo-quote">This [b]is[/b] [color=#ff0000]a[/color] [size=3]demo[/size] :).</textarea>
<a href="javascript:insertQuote();">Insert Quote</a> | <a href="javascript:insertQuote(true);">Insert Quote with author</a>

## Code behind

To insert a BBCode quote, just pass the BBCode to the `insert()` command.
e.g.:

<pre class="prettyprint linenums">
// Get the editor instance
var editor = $("#demo-quote").sceditor("instance");

// Insert some BBCode
editor.insert('[quote=author]This is an [b]example[/b] quote.[/quote]');
</pre>

