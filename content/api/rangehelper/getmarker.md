---
title: getMarker()
excerpt: Gets the marker for the specified ID.
---
## GetMarker()

{{% api_method name="getMarker(id)" since="1.3.5" %}}

Gets the current marker for the specified ID.


{{% api_section title="Syntax" %}}
```js
var marker = instance.getMarker(id);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**id**  
Type: **[String](/api/types/#string)** 
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[Node](/api/types/#node)** 

Will return `null` if there is no marker for the specified ID.
{{% /api_section %}}

{{% /api_method %}}