---
title: getSourceEditorValue()
excerpt: Gets the current source editor value.
permalink: /api/sceditor/getsourceeditorvalue/
categories:
    - Docs
    - API
    - SCEditor-API
---
## GetSourceEditorValue()

<article class="api method" markdown="1">
### <a id="getSourceEditorValue" href="#getSourceEditorValue">getSourceEditorValue()</a> <span class="since">Since: 1.3.0</span>

Gets the current value of the source editor.

If using a plugin that filters the source, like the BBCode plugin, this will return the result of the filtering which is HTML.

If the `filter` paramter is set to false, this will return the unfiltered contents of the source editor (BBCode if using the BBCode plugin).

<span class="Label Label--info">Info:</span> Using the [val()](/api/sceditor/val/) method is the prefered way of getting the editors value. It will check if the editor is in WYSIWYG or source mode and return the appropriate value.


#### Syntax

	var val = instance.getSourceEditorValue([filter]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins. Will cause BBCode to be converted to HTML if using the BBCode plugin.
</div>
</div>


#### Return

Type: **[String](/api/types/#string)**
</article>

