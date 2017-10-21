---
title: extractContents()
excerpt: Extracts all the nodes between two DOM nodes.
---

## extractContents

{{% api_method name="extractContents(start, end)" since="1.3.0" %}}

Extracts all the DOM nodes between the start and end nodes.


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: **[Node](/api/types/#node)**
{{% /api_parameter %}}

{{% api_parameter %}}
**end**  
Type: **[Node](/api/types/#node)**

The DOM node to check.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}


{{% api_section title="Syntax" %}}
```js
var contents = sceditor.dom.extractContents(start, end);
```
{{% /api_section %}}

{{% /api_method %}}
