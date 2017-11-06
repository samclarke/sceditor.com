---
title: BBCode Demo
excerpt: Demo of SCEditor used to produce BBCode
date: 2012-04-16
slug: bbcode-demo
---
## BBCode demo

<link rel="stylesheet" href="/minified/themes/default.min.css" />
<script src="/minified/sceditor.min.js"></script>
<script src="/minified/formats/bbcode.js"></script>
<textarea style="width:600px; height:300px" id="demo">This [b]is[/b] [color=#ff0000]a[/color] [size=3]demo[/size] :).</textarea><!--more-->

<script>
sceditor.create(document.getElementById('demo'), {
	width: '100%',
	style: '/minified/themes/content/default.min.css',
	emoticonsRoot: '/',
	format: 'bbcode'
});
</script>

## Code behind

### Include the JS &amp; CSS:

```html
<!-- Include the default SCEditor theme -->
<link rel="stylesheet" href="/minified/themes/default.min.css" />

<!-- Include SCEditor's JS -->
<script src="/minified/sceditor.min.js"></script>

<!-- Include the BBCode format -->
<script src="/minified/formats/bbcode.js"></script>
```


### Initialize SCEditor:

```html
<textarea id="editor">Hello world</textarea>
<script>
// Get the textarea to be converted
var textarea = document.getElementById('editor');

sceditor.create(textarea, {
	// Load the XHTML format
	format: 'bbcode',

	// Use jquery.sceditor.default.min.css to style the content
	style: '/minified/themes/content/default.min.css'
});
</script>
```

### Finished!

That's it, the textarea with the ID `editor` should now be instances of SCEditor.
