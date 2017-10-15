---
title: insertNode()
permalink: /api/rangehelper/insertnode/
excerpt: Inserts a DOM node at the current selection.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## InsertNode()

<article class="api method" markdown="1">
### <a id="insertNode" href="#insertNode">insertNode(start)</a> <span class="since">Since: 1.3.5</span>

<div class="alert alert-block alert-error">
	<p><strong>Warning!</strong></p>
	<p>The DOM nodes must belong to the <code>document</code> they are being inserted in. If they belong to another <code>document</code>, an error will be thrown.</p>
</div>

Inserts a DOM node at the position of the current selection.

See the [insertHTML()](/api/rangehelper/inserthtml/) method for the HTML equivalent.

<span class="Label Label--info">Info:</span> Using the [sceditor.insert()](/api/sceditor/val/) method is the prefered way of inserting HTML into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the appropriate editor.


#### Syntax

	instance.insertNode(start[, end]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: **[Node](/api/types/#node)**

The DOM node to insert.
</div>

<div class="parameter" markdown="1">
**end**  
Type: **[Node](/api/types/#node)**
Default: `null`

If specified and there is any text selected, the selected text will be placed between the `start` and `end` nodes.
</div>
</div>
</article>
