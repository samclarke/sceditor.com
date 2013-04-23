---
layout: api
title: findCommonAncestor()
permalink: /api/dom/findcommonancestor/
excerpt: Finds the first common parent of two DOM nodes.
categories:
    - Docs
    - API
    - DOM-API
---
## FindCommonAncestor()

<article class="api method" markdown="1">
### <a id="findCommonAncestor" href="#findCommonAncestor">findCommonAncestor(nodeA, nodeB)</a> <span class="since">Since: 1.3.0</span>

Finds the first common parent of two DOM nodes.


#### Syntax

	var commonAncestor = $.sceditor.dom.findCommonAncestor(nodeA, nodeB);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**nodeA**  
Type: **[Node](/api/types/#node)**
</div>

<div class="parameter" markdown="1">
**nodeB**  
Type: **[Node](/api/types/#node)**
</div>
</div>


#### Return

Type: **[Node](/api/types/#node)**

Will return `null` if there are no common ancestor of the two nodes.
</article>
