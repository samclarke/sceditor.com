---
title: css()
excerpt: Gets or sets inline CSS in the WYSIWYG editor.
permalink: /api/sceditor/css/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Css()

<article class="api method" markdown="1">
### <a id="css" href="#css">css()</a> <span class="since">Since: 1.4.3</span>

Gets the current inline CSS of the WYSIWYG editor.


#### Syntax

	var css = instance.css();


#### Return

Type: **[String](/api/types/#string)**
</article>



<article class="api method" markdown="1">
### <a id="css-value" href="#css-value">css(value)</a> <span class="since">Since: 1.4.3</span>

Sets the current inline CSS of the WYSIWYG editor.

<span class="Label Label--important">Important:</span> Like all CSS changes, changing the style can cause issues in different browsers.

#### Syntax

	instance.css(value);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**css**  
Type: *[String](/api/types/#string)*

The CSS to add.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Change the default font colour:

	$('textarea').sceditor('instance').css('body { color: #ff0; }');

</article>
</article>

