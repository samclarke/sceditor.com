---
title: How to insert quotes
excerpt: Brief example of how to insert a quote
date: 2012-04-17
slug: how-to-insert-a-quote
---
## Quote demo

<link rel="stylesheet" href="/minified/themes/default.min.css" />
<script src="/minified/sceditor.min.js"></script>
<script src="/minified/formats/bbcode.js"></script>

<textarea style="width:600px; height:300px" id="demo-quote">This [b]is[/b] [color=#ff0000]a[/color] [size=3]demo[/size] :).</textarea>

<script>
var textarea = document.getElementById('demo-quote');
sceditor.create(textarea, {
	format: 'bbcode',
	style: '/minified/themes/content/default.min.css',
	emoticonsRoot: '/'
});
function insertQuote(includeAuthor) {
	var textarea = document.getElementById('demo-quote');
	// Get the editor instance
	var editor = sceditor.instance(textarea);

	// execute the insert command
	if(includeAuthor)
		editor.insert('[quote=author]This is an [b]example[/b] quote.[/quote]');
	else
		editor.insert('[quote]This is an [b]example[/b] quote.[/quote]');
}
</script>

<a href="javascript:insertQuote();">Insert Quote</a> | <a href="javascript:insertQuote(true);">Insert Quote with author</a>

## Code behind

To insert a BBCode quote, just pass the BBCode to the `insert()` command.
e.g.:

```js
var textarea = document.getElementById('demo-quote');
// Get the editor instance
var editor = sceditor.instance(textarea);

// Insert some BBCode
editor.insert('[quote=author]This is an [b]example[/b] quote.[/quote]');
```
