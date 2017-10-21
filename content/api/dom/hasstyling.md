---
title: hasStyling()
excerpt: Checks if an element has any styling.
---
## hasStyling


{{% api_method name="hasStyling(element)" since="1.4.4" %}}

Returns true if the passed element is not a `p` or `div` tag, has any inline CSS or has any CSS classes.

{{% api_parameters %}}
{{% api_parameter %}}
**element**  
Type: **[HTMLElement](/api/types/#htmlelement)**

The DOM element to check.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}


{{% api_section title="Syntax" %}}
```js
var hasStyling = sceditor.dom.hasStyling(element);
```
{{% /api_section %}}

{{% /api_method %}}
