---
layout: doc
title: BBCode - Plugin
permalink: /bbcode/
categories:
    - Docs
sections:
    - url: '#bbcode'
      title: BBCode Plugin
    - url: '#initialise'
      title: Initialise
    - url: '#custom-bbcodes'
      title: Custom BBCodes
    - url: '#parser-options'
      title: Parser Options
---

## BBCode Plugin <a id="bbcode"></a>

This plugin will convert the output of SCEditor into BBCode. To add custom BBCodes see the [Custom BBCodes page](/documentation/custom-bbcodes/).


### Initialise <a id="initialise"></a>

To enable the BBCode plugin just add `bbcode` to the `plugins` option. e.g.

<pre class="prettyprint linenums">
&lt;script&gt;
$(function() {
	$("textarea").sceditor({
		plugins: "bbcode",
		style: "minified/jquery.sceditor.default.min.css"
	});
});
&lt;/script&gt;
</pre>


### Custom BBCodes <a id="custom-bbcodes"></a>

To create custom BBCodes see the [Custom BBCodes page](/documentation/custom-bbcodes/).


### Parser Options <a id="parser-options"></a>

To set parser options, use the [parserOptions option](/documentation/options/#parserOptions) when creating the editor.

e.g.

<pre class="prettyprint linenums">
&lt;script&gt;
$(function() {
	$("textarea").sceditor({
		plugins: "bbcode",
		style: "minified/jquery.sceditor.default.min.css",

		parserOptions: {
			breakBeforeBlock: false,
			breakStartBlock: false
			// ect.
		}
	});
});
&lt;/script&gt;
</pre>


### breakBeforeBlock

**breakBeforeBlock** *Boolean* Defaults to `false`

If to add a new line before block level elements

This can be overridden by individual BBCodes using the `breakBefore` property.


### breakStartBlock

**breakStartBlock** *Boolean* Defaults to `false`

If to add a new line after the start of block level elements

This can be overridden by individual BBCodes using the `breakStart` property.


### breakEndBlock

**breakEndBlock** *Boolean* Defaults to `false`

If to add a new line before the end of block level elements

This can be overridden by individual BBCodes using the `breakEnd` property.


### breakAfterBlock

**breakAfterBlock** *Boolean* Defaults to `true`

If to add a new line after block level elements.

This can be overridden by individual BBCodes using the `breakAfter` property.


### removeEmptyTags

**removeEmptyTags** *Boolean* Defaults to `true`

If to remove empty tags.

This can be overridden by individual BBCodes using the `allowsEmpty` property.


### fixInvalidNesting

**fixInvalidNesting** *Boolean* Defaults to `true`

If to fix invalid nesting, like block level elements inside inline elements.

For example.

<pre class="prettyprint linenums lang-bbcode">
[inline]testing[block]test[/block]123[/inline]
</pre>

Would become:

<pre class="prettyprint linenums lang-bbcode">
[inline]testing[/inline][block]test[/block][inline]123[/inline]
</pre>


### fixInvalidChildren

**fixInvalidChildren** *Boolean* Defaults to `true`

If to fix invalid children. i.e. A tag which is inside a parent that doesn't allow that type of tag as a child.


### quoteType

**quoteType** *$.sceditor.BBCodeParser.QuoteType* Defaults to `$.sceditor.BBCodeParser.QuoteType.auto`

The default attribute quote type.

Should be one of the following values:

* **$.sceditor.BBCodeParser.QuoteType.always**  
  Always quote the attribute value
* **$.sceditor.BBCodeParser.QuoteType.never**  
  Never quote the attributes value
* **$.sceditor.BBCodeParser.QuoteType.auto**  
  Only quote the attributes value when it contains spaces ot equals

