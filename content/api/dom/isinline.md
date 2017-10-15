---
title: isInline()
permalink: /api/dom/isinline/
excerpt: Checks if a node is inline or block level.
categories:
    - Docs
    - API
    - DOM-API
---
## IsInline()

<article class="api method" markdown="1">
### <a id="isInline" href="#isInline">isInline(node)</a> <span class="since">Since: 1.3.0</span>

Checks if the passed node is inline or block level.


#### Syntax

	var isInline = $.sceditor.dom.isInline(node[, includeCode]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**node**  
Type: **[Node](/api/types/#node)**

The DOM node to check.
</div>

<div class="parameter" markdown="1">
**includeCode**  
Type: **[Boolean](/api/types/#bool)**  
Default: `false`

If to count the `<code>` tag as block level.
</div>
</div>


#### Return

Type: **[Boolean](/api/types/#bool)**
</article>
