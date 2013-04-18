---
layout: api
title: getWysiwygEditorValue()
excerpt: Gets the current WYSIWYG editor value.
permalink: /api/sceditor/getwysiwygeditorvalue/
categories:
    - Docs
    - API
    - SCEditor-API
---
## GetWysiwygEditorValue()

<article class="api method" markdown="1">
### <a id="getWysiwygEditorValue" href="#getWysiwygEditorValue">getWysiwygEditorValue()</a> <span class="since">Since: 1.3.0</span>

Gets the WYSIWYG editors current HTML value.

If using a plugin that filters the HTML, like the BBCode plugin, it will return the result of the filtering (BBCode) unless the `filter` param is set to false.

<span class="label label-info">Info:</span> Using the [val()](/api/sceditor/val/) method is the prefered way of getting the editors value. It will check if the editor is in WYSIWYG or source mode and return the appropriate value.


#### Syntax

	var val = instance.getWysiwygEditorValue([filter]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins. Will cause the HTML to be converted to BBCode if using the BBCode plugin.
</div>
</div>


#### Return

Type: **[String](/api/types/#string)**
</article>

