---
title: getFirstBlockParent()
excerpt: Gets the first block level parent of the current selection.
---
## getFirstBlockParent

{{% api_method name="getFirstBlockParent()" since="1.3.5" %}}

Gets the first block level parent node of the current selection.


{{% api_section title="Syntax" %}}
```js
var parent = instance.getFirstBlockParent([node]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**node**  
Type: **[Node](/api/types/#node)** 

If specified, this method will get the first block level parent of the specified node instead of getting the first block parent of the current selection.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[Range](/api/types/#range)**

Will return `null` if there is no current selection.
{{% /api_section %}}

{{% /api_method %}}