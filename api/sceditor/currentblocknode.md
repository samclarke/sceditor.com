---
layout: api
title: currentBlockNode()
excerpt: Gets the current block level DOM node that contains the selection/caret.
permalink: /api/sceditor/currentnode/
categories:
    - Docs
    - API
    - SCEditor-API
---
## CurrentNode()

<article class="api method" markdown="1">
### <a id="currentBlockNode" href="#currentBlockNode">currentBlockNode()</a> <span class="since">Since: 1.4.4</span>

Gets the current block level DOM node that contains the selection/caret in WYSIWYG mode.

Will return `null` if there is currently no selection or in source mode.


#### Syntax

	var node = instance.currentBlockNode();


#### Return

Type: **[Node](/api/types/#node)**
</article>

