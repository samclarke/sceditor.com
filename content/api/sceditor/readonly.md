---
title: readOnly()
excerpt: Gets or sets if the editor is read only.
---
## readOnly()

{{% api_method name="readOnly()" since="1.3.5" %}}

Gets if the editor is read only


{{% api_section title="Syntax" %}}
```js
var isReadOnly = instance.readOnly();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#bool)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="readOnly(val)" since="1.3.5" %}}

Sets if the editor is read only


{{% api_section title="Syntax" %}}
```js
instance.readOnly(val);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to make the editor read-only.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the editor to read only:

```js
var textarea = ...;
sceditor.instance(textarea).readOnly(true);
```

Make the editor editable:

```js
var textarea = ...;
sceditor.instance(textarea).readOnly(false);
```
{{% /api_example %}}

{{% /api_method %}}
