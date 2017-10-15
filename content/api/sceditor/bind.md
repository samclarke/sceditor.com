---
title: bind()
permalink: /api/sceditor/bind/
excerpt: Binds a handler to an event.
categories:
    - Docs
    - API
    - SCEditor-API
---
## Bind()

<article class="api method" markdown="1">
### <a id="bind" href="#bind">bind(events, func)</a> <span class="since">Since: 1.4.1</span>

Binds a handler to the specified events.

Unlike the jQuery bind() method, this method only binds a limited set of supported events.

The supported events are:

 * keyup
 * keydown
 * keypress
 * blur
 * focus
 * nodechanged  
   When the current node containing the selection changes in WYSIWYG mode
 * contextmenu

#### Syntax

	instance.bind(events, func[, excludeWysiwyg][, excludeSource]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**events**  
Type: *[String](/api/types/#string)*

List of events separated by spaces to bind the handler to.
</div>

<div class="parameter" markdown="1">
**func**  
Type: *[Function](/api/types/#function)*

Function that will be called when the event occurs
</div>

<div class="parameter" markdown="1">
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the handler to the WYSIWYG editor.
</div>

<div class="parameter" markdown="1">
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the handler to the source editor.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

	$('textarea').sceditor('instance').bind('keypress', function(e) {
		alert('Key pressed');
	});

</article>
</article>

