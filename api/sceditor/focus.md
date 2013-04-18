---
layout: api
title: focus()
excerpt: Binds a handler to the focus event, or triggers the focus event.
permalink: /api/sceditor/focus/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Focus()

<article class="api method" markdown="1">
### <a id="focus" href="#focus">focus()</a> <span class="since">Since: 1.3.0</span>

Focuses the editor.


#### Syntax

	instance.focus();


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>



<article class="api method" markdown="1">
### <a id="focus-func" href="#focus-func">focus(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the focus event.

This is just a shortcut for:

	instance.bind('focus', func[, excludeWysiwyg][, excludeSource]);


#### Syntax

	instance.focus(func[, excludeWysiwyg][, excludeSource]);


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

	$('textarea').sceditor('instance').focus(function(e) {
		alert('Gained focus');
	});

</article>
</article>

