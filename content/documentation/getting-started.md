---
title: Getting started
permalink: /documentation/getting-started/
weight: 1000
---

# Quick Start <a id="quick-start"></a>


## Include the <abbr title="JavaScript">JS</abbr> &amp; <abbr title="Cascading Style Sheet">CSS</abbr>: <a id="include"></a>

```html
<!-- Include jQuery, this can be omitted if it's already included -->
<script src="//cdn.jsdelivr.net/jquery/3.2.1/jquery.min.js"></script>

<!-- Include the default theme -->
<link rel="stylesheet" href="minified/themes/default.min.css" />

<!-- Include the editors JS -->
<script src="minified/jquery.sceditor.bbcode.min.js"></script>
```

The file `jquery.sceditor.bbcode.min.js` has the BBCode plugin bundled with it and the file `jquery.sceditor.xhtml.min.js` has the XHTML plugin bundled with it.

For a complete list of files, see the [Files](/documentation/files/) documentation page.


## Initialise <a id="initialise"></a>

### BBCode <a id="bbcode"></a>

To enable the BBCode plugin just add `bbcode` to the `plugins` option. e.g.

```html
<script>
$(function() {
	$('textarea').sceditor({
		plugins: 'bbcode',
		style: 'minified/jquery.sceditor.default.min.css'
	});
});
</script>
```

### XHTML <a id="xhtml"></a>

To enable the XHTML plugin just add `xhtml` to the `plugins` option. e.g.

```html
<script>
$(function() {
	$('textarea').sceditor({
		plugins: 'xhtml',
		style: 'minified/jquery.sceditor.default.min.css'
	});
});
</script>
```


## Finished

That's it! SCEditor should now be setup.
