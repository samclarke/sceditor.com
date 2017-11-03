---
title: selectionChanged()
excerpt: Binds a handler the selection changed event.
---
## selectionChanged()

{{% api_method name="selectionChanged(func)" since="1.4.1" %}}

Binds a handler to the WYSIWYG selection changed event.

This event will fire whenever the selection changes in the WYSIWYG editor.


{{% api_section title="Syntax" %}}
```js
instance.selectionChanged(func);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**func**  
Type *[Function](/api/types/#function)*

Function that will be called when the event occurs
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
```js
var textarea = ...;
sceditor.instance(textarea).selectionChanged(function(e) {
	alert('The selection has changed');
});
```
{{% /api_example %}}

{{% /api_method %}}
