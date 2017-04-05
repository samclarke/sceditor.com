---
layout: api
title: createDropDown()
excerpt: Creates a dropdown.
permalink: /api/sceditor/createdropdown/
categories:
    - Docs
    - API
    - SCEditor-API
---
## CreateDropDown()

<article class="api method" markdown="1">
### <a id="createDropDown" href="#createDropDown">createDropDown(mItem, name, content)</a> <span class="since">Since: 1.3.0</span>

Creates a dropdown menu aligned to the to the menu item `mItem`.


#### Syntax

	instance.createDropDown(mItem, name, content[, unselectable]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**mItem**  
Type: *[Node](/api/types/#node)*

The menu button to align the drop down to.
</div>

<div class="parameter" markdown="1">
**name**  
Type: *[String](/api/types/#string)*

The name to give the dropdown. Will add the class `sceditor-name` to the dropdown. 
</div>

<div class="parameter" markdown="1">
**content**  
Type: *[Node](/api/types/#node)*

The HTML content of the dropdown.
</div>

<div class="parameter" markdown="1">
**unselectable**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to add the `unselectable` attribute to all the elements in the content. This stops IE from deselecting the text in the editor when an element is clicked.
</div>
</div>
</article>

