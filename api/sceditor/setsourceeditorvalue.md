---
layout: api
title: setSourceEditorValue()
excerpt: Sets the source editors value.
permalink: /api/sceditor/setsourceeditorvalue/
categories:
    - Docs
    - API
    - SCEditor-API
---
## SetSourceEditorValue()

<article class="api method" markdown="1">
### <a id="setSourceEditorValue" href="#setSourceEditorValue">setSourceEditorValue(val)</a> <span class="since">Since: 1.3.0</span>

Sets the current value of the source editor.

<span class="label label-info">Info:</span> Using the [val()](/api/sceditor/val/) method is the prefered way of setting the editors value. It will check if the editor is in WYSIWYG or source mode and set the appropriate value.


#### Syntax

	instance.getSourceEditorValue(val);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**val**  
Type: *[String](/api/types/#string)*

The value to set. Should be HTML or BBCode if using the BBCode plugin.
</div>
</div>
</article>

