---
title: selectOuterText()
excerpt: Selects the text left and right of the current selection/caret.
---
## selectOuterText()

{{% api_method name="selectOuterText(left, right)" since="1.4.3" %}}

Selects the text left and/or right of the current selection/caret.


{{% api_section title="Syntax" %}}
```js
instance.selectOuterText(left, right);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**left**  
Type: **[Integer](/api/types/#int)**

Number of characters left of the current selection to select. Set to `0` to not select any.
{{% /api_parameter %}}

{{% api_parameter %}}
**right**  
Type: **[Integer](/api/types/#int)**

Number of characters right of the current selection to select. Set to `0` to not select any.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
