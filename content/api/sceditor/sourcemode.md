---
title: sourceMode()
excerpt: Gets or sets if the editor is in source mode.
---
## sourceMode()

{{% api_method name="sourceMode()" since="1.4.0" %}}

Gets if the editor is in source mode.


{{% api_section title="Syntax" %}}
```js
var isInSourceMode = instance.sourceMode();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="sourceMode(val)" since="1.4.0" %}}

Sets if the editor is in source mode.


{{% api_section title="Syntax" %}}
```js
instance.sourceMode(val);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to put the editor into source mode or not.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the editor to source mode:

```js
var textarea = ...;
sceditor.instance(textarea).sourceMode(true);
```

Set the editor to WYSIWYG mode:

```js
var textarea = ...;
sceditor.instance(textarea).sourceMode(false);
```
{{% /api_example %}}

{{% /api_method %}}
