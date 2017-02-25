---
layout: doc
title: Getting started
permalink: /documentation/getting-started/
categories:
    - Docs
---

## Quick Start <a id="quick-start"></a>


### Include the <abbr title="JavaScript">JS</abbr> &amp; <abbr title="Cascading Style Sheet">CSS</abbr>: <a id="include"></a>

<pre class="prettyprint linenums">
&lt;!-- Include jQuery, this can be omitted if it's already included --&gt;
&lt;script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;&lt;/script&gt;

&lt;!-- Include the default theme --&gt;
&lt;link rel="stylesheet" href="minified/themes/default.min.css" type="text/css" media="all" /&gt;

&lt;!-- Include the editors JS --&gt;
&lt;script type="text/javascript" src="minified/jquery.sceditor.bbcode.min.js">&lt;/script&gt;
</pre>

The file `jquery.sceditor.bbcode.min.js` has the BBCode plugin bundled with it and the file `jquery.sceditor.xhtml.min.js` has the XHTML plugin bundled with it.

For a complete list of files, see the [Files](/documentation/files/) documentation page.


### Initialise <a id="initialise"></a>

#### BBCode <a id="bbcode"></a>

To enable the BBCode plugin just add `bbcode` to the `plugins` option. e.g.

<pre class="prettyprint linenums scrollable">
&lt;script&gt;
$(function() {
	$("textarea").sceditor({
		plugins: "bbcode",
		style: "minified/jquery.sceditor.default.min.css"
	});
});
&lt;/script&gt;
</pre>

#### XHTML <a id="xhtml"></a>

To enable the XHTML plugin just add `xhtml` to the `plugins` option. e.g.

<pre class="prettyprint linenums">&lt;script&gt;
$(function() {
	$("textarea").sceditor({
		plugins: "xhtml",
		style: "minified/jquery.sceditor.default.min.css"
	});
});
&lt;/script&gt;
</pre>


### Finished

That's it! SCEditor should now be setup.
