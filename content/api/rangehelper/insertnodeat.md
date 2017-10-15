---
title: insertNodeAt()
permalink: /api/rangehelper/insertnodeat/
excerpt: Inserts a DOM node at the start or end current selection.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## InsertNodeAt()

<article class="api method" markdown="1">
### <a id="insertNodeAt" href="#insertNodeAt">insertNodeAt(start)</a> <span class="since">Since: 1.3.5</span>

<div class="alert alert-block alert-error">
	<p><strong>Warning!</strong></p>
	<p>The DOM nodes must belong to the <code>document</code> they are being inserted in. If they belong to another <code>document</code>, an error will be thrown.</p>
</div>

Inserts a DOM node at the start or end of the current selection.


#### Syntax

	instance.insertNodeAt(start, node);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: **[Boolean](/api/types/#bool)**

If to insert the node at the start or end of the current selection
</div>

<div class="parameter" markdown="1">
**node**  
Type: **[Node](/api/types/#node)**

The DOM node to insert.
</div>
</div>
</article>
