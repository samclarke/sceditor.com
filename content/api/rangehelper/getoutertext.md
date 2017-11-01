---
title: getOuterText()
excerpt: Gets the text left or right of the current selection/caret.
---
## getOuterText()

{{% api_method name="getOuterText(before, length)" since="1.4.3" %}}

Gets the text left or right of the current selction/caret.


{{% api_section title="Syntax" %}}
```js
var text = instance.getOuterText(before, length);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**before**  
Type: **[Boolean](/api/types/#bool)**

If to get the text before or after the current selection.
{{% /api_parameter %}}

{{% api_parameter %}}
**length**  
Type: **[Integer](/api/types/#int)**

The number of characters to get from the left or right of the current selection.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[String](/api/types/#string)**
{{% /api_section %}}


{{% api_example %}}
Get 10 characters before the current selection:

```js
var textarea = ...;
var text = sceditor.instance(textarea)
    .getRangeHelper()
    .getOuterText(true, 10);
```

Get 5 characters after the current selection:

```js
var textarea = ...;
var text = sceditor.instance(textarea)
    .getRangeHelper()
    .getOuterText(false, 5);
```
{{% /api_example %}}

{{% /api_method %}}