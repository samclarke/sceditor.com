---
title: isInline()
excerpt: Checks if a node is inline or block level.
---
## isInline

{{% api_method name="isInline(node)" since="1.3.0" %}}

Checks if the passed node is inline or block level.


{{% api_section title="Syntax" %}}
```js
var isInline = sceditor.dom.isInline(node[, includeCode]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**includeCode**  
Type: **[boolean](/api/types/#bool)**  
Default: `false`

If to count the `<code>` tag as block level.
{{% /api_parameter %}}

{{% api_parameter %}}
**node**  
Type: **[Node](/api/types/#node)**

The DOM node to check.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}

{{% /api_method %}}
