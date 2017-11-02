---
title: clearBlockFormatting()
excerpt: Clears the formatting of the first block level element that has the cursor
---
## clearBlockFormatting()

{{% api_method name="clearBlockFormatting()" since="1.4.4" %}}

Clears the formatting of the first block level element that contains the cursor.


{{% api_section title="Syntax" %}}
```js
instance.clearBlockFormatting();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="clearBlockFormatting(element)" since="1.4.4" %}}

Clears the formatting of the passed element by removing all CSS classes, all inline styling and if it isn't a `p` or `div` tag by converting it into a `p` tag.


{{% api_section title="Syntax" %}}
```js
instance.clearBlockFormatting(element);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**element**  
Type: **[HTMLElement](/api/types/#htmlelement)**

The DOM element to remove the formatting from.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}
