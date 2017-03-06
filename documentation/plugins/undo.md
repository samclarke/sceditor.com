---
layout: doc
title: Undo - Plugin
permalink: /documentation/plugins/undo/
categories:
    - Docs
---

## Undo Plugin <a id="undo"></a>

This plugin adds undo / redo support to SCEditor.


### Initialise <a id="initialise"></a>

To enable the undo plugin just add `undo` to the `plugins` option. e.g.

<pre class="prettyprint linenums">
&lt;script&gt;
$(function() {
	$('textarea').sceditor({
		plugins: 'undo',
		style: 'minified/jquery.sceditor.default.min.css'
	});
});
&lt;/script&gt;
</pre>

That's it!
The `ctrl+z`, `ctrl+shift+z` and `ctrl+y` should now work constantly across
all browsers.
