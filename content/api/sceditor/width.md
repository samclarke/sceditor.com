---
title: width()
excerpt: Gets or sets the editors width.
permalink: /api/sceditor/width/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Height()

<article class="api method" markdown="1">
### <a id="width" href="#height">width()</a> <span class="since">Since: 1.3.5</span>

Gets the current width of the editor in px.


#### Syntax

	var val = instance.width();


#### Return

Type: **[Int](/api/types/#int)**

The width in pixels
</article>



<article class="api method" markdown="1">
### <a id="width-value" href="#width-value">width(value)</a> <span class="since">Since: 1.3.5</span>

Sets the width of the editor.


#### Syntax

	instance.width(value[, filter]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**value**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

Should either be the width in pixels or a string percentage.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the width to 200px:

	$('textarea').sceditor('instance').width(200);

Set the width to 100%:

	$('textarea').sceditor('instance').width('100%');

</article>
</article>

