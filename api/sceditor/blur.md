---
layout: api
title: blur()
excerpt: Binds a handler to the blur event, or triggers the blur event.
permalink: /api/sceditor/blur/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Blur()

<article class="api method" markdown="1">
### <a id="blur" href="#blur">blur()</a> <span class="since">Since: 1.3.6</span>

Triggers the blur event, removing the focus from the editor.


#### Syntax

	instance.blur();


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>



<article class="api method" markdown="1">
### <a id="blur-func" href="#blur-func">blur(func)</a> <span class="since">Since: 1.4.1</span>

Binds a function to the blur event.

This is just a shortcut for:

	instance.bind('blur', func[, excludeWysiwyg][, excludeSource]);


#### Syntax

	instance.blur(func[, excludeWysiwyg][, excludeSource]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**func**  
Type *[Function](/api/types/#function)*

Function that will be called when the event occurs
</div>

<div class="parameter" markdown="1">
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the event to the WYSIWYG editor.
</div>

<div class="parameter" markdown="1">
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the event to the source editor.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

	$('textarea').sceditor('instance').blur(function(e) {
		alert('Lost focus');
	});

</article>
</article>

