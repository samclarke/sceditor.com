---
layout: api
title: dimensions()
excerpt: Gets or sets the width and height of the editor.
permalink: /api/sceditor/dimensions/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Dimensions()

<article class="api method" markdown="1">
### <a id="dimensions" href="#dimensions">dimensions()</a> <span class="since">Since: 1.4.1</span>

Gets the current dimensions of the editor.


#### Syntax

	var dimensions = instance.dimensions();


#### Return

Type: **[Object](/api/types/#object)**

Object with the properties `width` and `height`.


<article class="api examples" markdown="1">
### Examples

Get the current width and height:

	var dimensions = $('textarea').sceditor('instance').dimensions();
	var width      = dimensions.width;
	var height     = dimensions.height;
</article>
</article>



<article class="api method" markdown="1">
### <a id="dimensions-wh" href="#dimensions-wh">dimensions(width, height)</a> <span class="since">Since: 1.4.1</span>

Sets the current dimensions of the editor.


#### Syntax

	instance.dimensions(width, height[, save]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**width**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

The width in pixels or a string percentage e.g. `100%`. 
</div>

<div class="parameter" markdown="1">
**height**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

The height in pixels or a string percentage e.g. `100%`. 
</div>

<div class="parameter" markdown="1">
**save**  
Type: *[Boolean](/api/types/#bool)*
Default: `true`

If to save the new sizes, this should normally be left as true.

The saved sizes are used for things like restoring from maximized state.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the current width to `100%` and the height to `300px`:

	$('textarea').sceditor('instance').dimensions('100%', 300);
</article>
</article>

