---
title: val()
excerpt: Gets or sets the editors value.
permalink: /api/sceditor/val/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Val()

<article class="api method" markdown="1">
### <a id="val" href="#val">val()</a> <span class="since">Since: 1.3.5</span>

Gets the current value of the editor.

This will return the filtered HTML from the WYSIWYG editor or the unfiltered contents of the source editor.

If using a plugin that filters the HTML like the BBCode plugin, this will return the filtered HTML or BBCode in the case of the BBCode plugin.


#### Syntax

	var val = instance.val();


#### Return

Type: **[String](/api/types/#string)**

The filtered value of the editor
</article>



<article class="api method" markdown="1">
### <a id="val-value" href="#val-value">val(value)</a> <span class="since">Since: 1.3.5</span>

Sets the value of the editor.

If `filter` is not set to `false` the value will be filtered by any plugins that support filtering. This means that if using a plugin like the BBCode plugin, the value should be BBCode instead of HTML.


#### Syntax

	instance.val(value[, filter]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**value**  
Type: *[String](/api/types/#string)*

String to set as the editors value
</div>

<div class="parameter" markdown="1">
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Setting the value:

	$('textarea').sceditor('instance').val('Hello <strong>World!</strong>');


If using the BBCode plugin, BBCode should be passed instead of HTML:

	$('textarea').sceditor('instance').val('Hello [b]World![/b]');


If `filter` is set to `false`, HTML can be passed even when using the BBCode plugin:

	$('textarea').sceditor('instance').val('Hello <strong>World!</strong>', false);

</article>
</article>

