---
layout: api
title: unbind()
excerpt: Unbinds a handler from an event.
permalink: /api/sceditor/unbind/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Unbind()

<article class="api method" markdown="1">
### <a id="unbind" href="#unbind">unbind(events, func)</a> <span class="since">Since: 1.4.1</span>

Unbinds a handler to the specified events.

Unlike the jQuery unbind() method, this method only works with a limited set of supported events.

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

	instance.unbind(events, func[, excludeWysiwyg][, excludeSource]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**events**  
Type: *[String](/api/types/#string)*

List of events seperated by spaces to unbind the handler from.
</div>

<div class="parameter" markdown="1">
**func**  
Type: *[Function](/api/types/#function)*

Function that to unbind
</div>

<div class="parameter" markdown="1">
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to unbind to the event from the WYSIWYG editor.
</div>

<div class="parameter" markdown="1">
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to unbind to the event from the source editor.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>

