---
title: Getting started
permalink: /documentation/getting-started/
weight: 1000
---

# Quick Start <a id="quick-start"></a>


## Include the <abbr title="JavaScript">JS</abbr> &amp; <abbr title="Cascading Style Sheet">CSS</abbr>: <a id="include"></a>

```html
<!-- Include the default theme -->
<link rel="stylesheet" href="minified/themes/default.min.css" />

<!-- Include the editors JS -->
<script src="minified/sceditor.min.js"></script>

<!-- Include the BBCode or XHTML formats -->
<script src="minified/formats/bbcode.js"></script>
<script src="minified/formats/xhtml.js"></script>
```

For a complete list of files, see the [Files](/documentation/files/) documentation page.


## Initialise <a id="initialise"></a>

### BBCode <a id="bbcode"></a>

To enable the BBCode plugin just add `bbcode` to the `format` option. e.g.

```html
<script>
var textarea = ...;
sceditor.create(textarea, {
	format: 'bbcode',
	style: 'minified/themes/content/default.min.css'
});
</script>
```

### XHTML <a id="xhtml"></a>

To enable the XHTML plugin just add `xhtml` to the `format` option. e.g.

```html
<script>
var textarea = ...;
sceditor.create(textarea, {
	format: 'xhtml',
	style: 'minified/themes/content/default.min.css'
});
</script>
```


## Finished

That's it! SCEditor should now be setup.
