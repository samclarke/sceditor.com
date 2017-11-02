---
title: currentNode()
excerpt: Gets the current DOM node that contains the selection/caret.
---
## currentNode()

{{% api_method name="currentNode()" since="1.4.1" %}}

Gets the current DOM node that contains the selection/caret in WYSIWYG mode.

Will return `null` if there is currently no selection or in source mode.


{{% api_section title="Syntax" %}}
```js
var node = instance.currentNode();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[Node](/api/types/#node)**
{{% /api_section %}}

{{% /api_method %}}
