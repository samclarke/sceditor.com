---
layout: api
title: rTraverse()
permalink: /api/dom/rtraverse/
excerpt: Traverses the children of a DOM node backwards.
categories:
    - Docs
    - API
    - DOM-API
---
## rTraverse()

<article class="api method" markdown="1">
### <a id="rTraverse" href="#rTraverse">rTraverse(node, func)</a> <span class="since">Since: 1.3.0</span>

Traverses the children of a DOM node in reverse.


#### Syntax

	$.sceditor.dom.rTraverse(node, func[, innermostFirst][, firstLevelOnly]);


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
</div>
</article>
