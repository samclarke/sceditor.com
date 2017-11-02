---
title: height()
excerpt: Gets or sets the current editor height.
---
## height()

{{% api_method name="height()" since="1.3.5" %}}

Gets the current height of the editor in px.


{{% api_section title="Syntax" %}}
```js
var val = instance.height();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[Int](/api/types/#int)**

The height in pixels
{{% /api_section %}}

{{% /api_method %}}


{{% api_method name="height(value)" since="1.3.5" %}}

Sets the height of the editor.


{{% api_section title="Syntax" %}}
```js
instance.height(value);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**value**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

Should either be the height in pixels or a string percentage.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the height to 200px:

```js
var textarea = ...;
sceditor.instance(textarea).height(200);
```
{{% /api_example %}}

{{% /api_method %}}
