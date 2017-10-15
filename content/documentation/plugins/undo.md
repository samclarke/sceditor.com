---
title: Undo
excerpt: Enables undo/redo functionality in SCEditor
---

# Undo Plugin <a id="undo"></a>

This plugin adds undo / redo support to SCEditor.


## Initialise <a id="initialise"></a>

To enable the undo plugin just add `undo` to the `plugins` option. e.g.

```html
<script>
$(function() {
	$('textarea').sceditor({
		plugins: 'undo',
		style: 'minified/jquery.sceditor.default.min.css'
	});
});
</script>
```

That's it!

The shortcuts `ctrl+z`, `ctrl+shift+z` and `ctrl+y` should now work constantly
across all browsers.
