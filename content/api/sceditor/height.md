---
title: height()
excerpt: Gets or sets the current editor height.
permalink: /api/sceditor/height/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Height()

<article class="api method" markdown="1">
### <a id="height" href="#height">height()</a> <span class="since">Since: 1.3.5</span>

Gets the current height of the editor in px.


#### Syntax

	var val = instance.height();


#### Return

Type: **[Int](/api/types/#int)**

The height in pixels
</article>



<article class="api method" markdown="1">
### <a id="height-value" href="#height-value">height(value)</a> <span class="since">Since: 1.3.5</span>

Sets the height of the editor.


#### Syntax

	instance.height(value[, filter]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**value**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

Should either be the height in pixels or a string percentage.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the height to 200px:

	$('textarea').sceditor('instance').height(200);

</article>
</article>

