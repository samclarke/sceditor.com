---
title: selectionChanged()
excerpt: Binds a handeler the selection changed event.
permalink: /api/sceditor/selectionchanged/
categories:
    - Docs
    - API
    - SCEditor-API
---
## SelectionChanged()


<article class="api method" markdown="1">
### <a id="selectionChanged-func" href="#selectionChanged-func">selectionChanged(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the WYSIWYG selection changed event.

This event will fire whenever the selection changes in the WYSIWYG editor.


#### Syntax

	instance.selectionChanged(func);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**func**  
Type *[Function](/api/types/#function)*

Function that will be called when the event occurs
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

	$('textarea').sceditor('instance').selectionChanged(function(e) {
		alert('The selection has changed');
	});

</article>
</article>

