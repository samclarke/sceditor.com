---
layout: api
title: currentNode()
excerpt: Gets the current DOM node that contains the selection/caret.
permalink: /api/sceditor/currentnode/
categories:
    - Docs
    - API
    - SCEditor-API
---
## CurrentNode()

<article class="api method" markdown="1">
### <a id="currentNode" href="#currentNode">currentNode()</a> <span class="since">Since: 1.4.1</span>

Gets the current DOM node that contains the selection/caret in WYSIWYG mode.

Will return `null` if there is currently no selection or in source mode.


#### Syntax

	var node = instance.currentNode();


#### Return

Type: **[Node](/api/types/#node)**
</article>

