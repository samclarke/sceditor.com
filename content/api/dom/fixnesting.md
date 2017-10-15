---
title: fixNesting()
permalink: /api/dom/fixnesting/
excerpt: Fixes nesting of child nodes so no block level nodes are inside inline nodes.
categories:
    - Docs
    - API
    - DOM-API
---
## FixNesting()

<article class="api method" markdown="1">
### <a id="fixNesting" href="#fixNesting">fixNesting(node)</a> <span class="since">Since: 1.3.0</span>

Fixes nesting of child nodes so no block level nodes are inside inline nodes.

For example, if the node contained the children:

	<span>test<div>test</div>test</span>


they would become:

	<span>test</span><div>test</div><span>test</span>


#### Syntax

	$.sceditor.dom.fixNesting(node);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**nodeA**  
Type: **[Node](/api/types/#node)**

The node to fix the children of.
</div>
</div>
</article>
