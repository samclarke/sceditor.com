---
title: width()
excerpt: Gets or sets the editors width.
---
## width()

{{% api_method name="width()" since="1.3.5" %}}

Gets the current width of the editor in px.


{{% api_section title="Syntax" %}}
```js
var val = instance.width();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[Int](/api/types/#int)**

The width in pixels
{{% /api_section %}}

{{% /api_method %}}


{{% api_method name="width(value)" since="1.3.5" %}}

Sets the width of the editor.


{{% api_section title="Syntax" %}}
```js
instance.width(value);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**value**  
Type: *[Int](/api/types/#int)* or *[String](/api/types/#string)*

Should either be the width in pixels or a string percentage.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the width to 200px:

```js
var textarea = ...;
sceditor.instance(textarea).width(200);
```

```js
var textarea = ...;
sceditor.instance(textarea).width('100%');
```
{{% /api_example %}}

{{% /api_method %}}
