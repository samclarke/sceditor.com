---
layout: api
title: keyDown()
excerpt: Binds a handeler the key down event.
permalink: /api/sceditor/keydown/
categories:
    - Docs
    - API
    - SCEditor-API
---
## KeyDown()


<article class="api method" markdown="1">
### <a id="keyDown-func" href="#keyDown-func">keyDown(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the key down event on the editor.


#### Syntax

	instance.keyDown(func[, excludeWysiwyg][, excludeSource]);


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

	$('textarea').sceditor('instance').keyDown(function(e) {
		alert('Key down event fired.');
	});

</article>
</article>

