---
title: fixNesting()
excerpt: Fixes nesting of child nodes so no block level nodes are inside inline nodes.
---
## fixNesting

{{% api_method name="fixNesting(node)" since="1.3.0" %}}

Fixes nesting of child nodes so no block level nodes are inside inline nodes.

For example, if the node contained the children:

```html
<span>test<div>test</div>test</span>
```

they would become:

```html
<span>test</span><div>test</div><span>test</span>
```


{{% api_section title="Syntax" %}}
```js
sceditor.dom.fixNesting(node);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**nodeA**  
Type: **[Node](/api/types/#node)**

The node to fix the children of.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
