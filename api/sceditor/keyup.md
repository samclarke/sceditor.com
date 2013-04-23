---
layout: api
title: keyUp()
excerpt: Binds a handeler the key up event.
permalink: /api/sceditor/keyup/
categories:
    - Docs
    - API
    - SCEditor-API
---
## KeyUp()


<article class="api method" markdown="1">
### <a id="keyUp-func" href="#keyUp-func">keyUp(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the keyUp event.


#### Syntax

	instance.keyUp(func[, excludeWysiwyg][, excludeSource]);


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

	$('textarea').sceditor('instance').keyUp(function(e) {
		alert('Key up event fired.');
	});

</article>
</article>

