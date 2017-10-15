---
title: nodeChanged()
excerpt: Binds a handeler the node changed event.
permalink: /api/sceditor/nodechanged/
categories:
    - Docs
    - API
    - SCEditor-API
---
## NodeChanged()


<article class="api method" markdown="1">
### <a id="nodeChanged-func" href="#nodeChanged-func">nodeChanged(func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the WYSIWYG nodeChanged event.

This will fire whenever the DOM node that contains the caret changes.

This event will only fire in the WYSIWYG editor as the source editor is text based so doesn't have any DOM nodes to cause the event.


#### Syntax

	instance.nodeChanged(func);


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

	$('textarea').sceditor('instance').nodeChanged(function(e) {
		alert('Current node has changed');
	});

</article>
</article>

