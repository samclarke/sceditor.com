---
title: rTraverse()
excerpt: Traverses the children of a DOM node backwards.
---
## rTraverse

{{% api_method name="rTraverse(node, func)" since="1.3.0" %}}

Traverses the children of a DOM node in reverse.


{{% api_section title="Syntax" %}}
```js
sceditor.dom.rTraverse(node, func[, innermostFirst][, firstLevelOnly]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**node**  
Type: **[Node](/api/types/#node)**

The node to traverse the children of.
{{% /api_parameter %}}

{{% api_parameter %}}
**func**  
Type: **[function](/api/types/#function)**

The function to call for each child. Should take 1 parameter, the child DOM node.

If `func` returns boolean false, traversing will stop immediately.
{{% /api_parameter %}}

{{% api_parameter %}}
**innermostFirst**  
Type: **[boolean](/api/types/#bool)**  
Default: `false`

If to start with the innermost child nodes first.
{{% /api_parameter %}}

{{% api_parameter %}}
**firstLevelOnly**  
Type: **[boolean](/api/types/#bool)**  
Default: `false`

If to only traverse the first level of child nodes.
{{% /api_parameter %}}

{{% api_parameter %}}
**reverse**  
Type: **[boolean](/api/types/#bool)**  
Default: `false`

If to traverse the child nodes backwards.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}