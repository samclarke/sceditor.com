---
layout: api
title: insertHTML()
permalink: /api/rangehelper/inserthtml/
excerpt: Inserts HTML at the selection.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## InsertHTML()

<article class="api method" markdown="1">
### <a id="insertHTML" href="#insertHTML">insertHTML(start)</a> <span class="since">Since: 1.3.5</span>

Inserts some HTML at the position of the current selection.

<span class="label label-info">Info:</span> Using the [sceditor.insert()](/api/sceditor/val/) method is the prefered way of inserting HTML into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the appropriate editor.


#### Syntax

	instance.insertHTML(start[, end]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: **[String](/api/types/#string)**

The HTML to insert.
</div>

<div class="parameter" markdown="1">
**end**  
Type: **[String](/api/types/#string)**
Default: `null`

If specified and there is any text selected, the selected text will be placed between `start` and `end`.
</div>
</div>
</article>
