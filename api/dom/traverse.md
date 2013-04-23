---
layout: api
title: traverse()
permalink: /api/dom/traverse/
excerpt: Traverses the children of a DOM node.
categories:
    - Docs
    - API
    - DOM-API
---
## Traverse()

<article class="api method" markdown="1">
### <a id="traverse" href="#traverse">traverse(node, func)</a> <span class="since">Since: 1.3.0</span>

Traverses the children of a DOM node.


#### Syntax

	$.sceditor.dom.traverse(node, func[, innermostFirst][, firstLevelOnly][, reverse]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**node**  
Type: **[Node](/api/types/#node)**

The node to traverse the children of.
</div>

<div class="parameter" markdown="1">
**func**  
Type: **[Function](/api/types/#function)**

The function to call for each child. Should take 1 parameter, the child DOM node.

If `func` returns boolean false, traversing will stop immediately.
</div>

<div class="parameter" markdown="1">
**innermostFirst**  
Type: **[Boolean](/api/types/#bool)**  
Default: `false`

If to start with the innermost child nodes first.
</div>

<div class="parameter" markdown="1">
**firstLevelOnly**  
Type: **[Boolean](/api/types/#bool)**  
Default: `false`

If to only traverse the first level of child nodes.
</div>

<div class="parameter" markdown="1">
**reverse**  
Type: **[Boolean](/api/types/#bool)**  
Default: `false`

If to traverse the child nodes backwards.
</div>
</div>
</article>
