---
title: setWysiwygEditorValue()
excerpt: Sets the WYSIWYG editors value.
permalink: /api/sceditor/setwysiwygeditorvalue/
categories:
    - Docs
    - API
    - SCEditor-API
---
## SetWysiwygEditorValue()

<article class="api method" markdown="1">
### <a id="setWysiwygEditorValue" href="#setWysiwygEditorValue">setWysiwygEditorValue(val)</a> <span class="since">Since: 1.3.0</span>

Sets the current value of the WYSIWYG editor.

<span class="Label Label--info">Info:</span> Using the [val()](/api/sceditor/val/) method is the prefered way of setting the editors value. It will check if the editor is in WYSIWYG or source mode and set the appropriate value.


#### Syntax

	instance.setWysiwygEditorValue(val);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**val**  
Type: *[String](/api/types/#string)*

The value to set. Should be HTML.
</div>
</div>
</article>

