---
title: currentBlockNode()
excerpt: Gets the current block level DOM node that contains the selection/caret.
---
## currentBlockNode()

{{% api_method name="currentBlockNode()" since="1.4.4" %}}

Gets the current block level DOM node that contains the selection/caret in WYSIWYG mode.

Will return `null` if there is currently no selection or in source mode.


{{% api_section title="Syntax" %}}
```js
var node = instance.currentBlockNode();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[Node](/api/types/#node)**
{{% /api_section %}}

{{% /api_method %}}
