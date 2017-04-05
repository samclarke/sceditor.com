---
layout: api
title: getFirstBlockParent()
permalink: /api/rangehelper/getfirstblockparent/
excerpt: Gets the first block level parent of the current selection.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## GetFirstBlockParent()

<article class="api method" markdown="1">
### <a id="getFirstBlockParent" href="#getFirstBlockParent">getFirstBlockParent()</a> <span class="since">Since: 1.3.5</span>

Gets the first block level parent node of the current selection.


#### Syntax

	var parent = instance.getFirstBlockParent([node]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**node**  
Type: **[Node](/api/types/#node)** 

If set, it will get the first block level parent of this node instead of the current selection.
</div>
</div>


#### Return

Type: **[Node](/api/types/#node)** 

Will return `null` if there is no current selection.
</article>
