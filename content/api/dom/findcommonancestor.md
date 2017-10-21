---
title: findCommonAncestor()
excerpt: Finds the first common parent of two DOM nodes.
---
## findCommonAncestor

{{% api_method name="findCommonAncestor(nodeA, nodeB)" since="1.3.0" %}}

Finds the first common parent of two DOM nodes.


{{% api_parameters %}}
{{% api_parameter %}}
**nodeA**  
Type: **[Node](/api/types/#node)**
{{% /api_parameter %}}

{{% api_parameter %}}
**nodeB**  
Type: **[Node](/api/types/#node)**
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[Node](/api/types/#node)**

Returns `null` if there is no common ancestor of the two nodes.
{{% /api_section %}}


{{% api_section title="Syntax" %}}
```js
var commonAncestor = sceditor.dom.findCommonAncestor(nodeA, nodeB);
```
{{% /api_section %}}

{{% /api_method %}}
