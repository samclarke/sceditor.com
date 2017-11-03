---
title: rtl()
excerpt: Gets or sets if the editor is in Right-To-Left mode.
---
## rtl()

{{% api_method name="rtl()" since="1.4.1" %}}

Gets if the editor is in Right-To-Left mode.

The default Right-To-Left mode will be picked up from the parent node of the editor.


{{% api_section title="Syntax" %}}
```js
var isRtl = instance.rtl();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="rtl(val)" since="1.4.1" %}}

Sets if the editor is in Right-To-Left mode


{{% api_section title="Syntax" %}}
```js
instance.rtl(val);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to make the editor into RTL mode.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the editor to right-to-left:

```js
var textarea = ...;
sceditor.instance(textarea).rtl(true);
```

Set the editor to left-to-right:

```js
var textarea = ...;
sceditor.instance(textarea).rtl(false);
```
{{% /api_example %}}

{{% /api_method %}}
