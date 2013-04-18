---
layout: api
title: keyPress()
excerpt: Binds a handeler the key press changed event.
permalink: /api/sceditor/keypress/
categories:
    - Docs
    - API
    - SCEditor-API
---
## KeyPress()


<article class="api method" markdown="1">
### <a id="keyPress-func" href="#keyPress-func">keyPress(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the keyPress event.


#### Syntax

	instance.keyPress(func[, excludeWysiwyg][, excludeSource]);


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
Default: `true`

If to bind to the event in the WYSIWYG editor.
</div>

<div class="parameter" markdown="1">
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to bind to the event in the source editor.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

	$('textarea').sceditor('instance').keyPress(function(e) {
		alert('Key press event fired.');
	});

</article>
</article>

