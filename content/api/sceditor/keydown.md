---
title: keyDown()
excerpt: Binds a handler the key down event.
---
## keyDown()

{{% api_method name="keyDown(func)" since="1.4.1" %}}

Binds a handler to the key down event on the editor.


{{% api_section title="Syntax" %}}
```js
instance.keyDown(func[, excludeWysiwyg][, excludeSource]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**func**  
Type *[Function](/api/types/#function)*

Function that will be called when the event occurs
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the event to the WYSIWYG editor.
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the event to the source editor.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
```js
var textarea = ...;
sceditor.instance(textarea).keyDown(function(e) {
	alert('Key down event fired.');
});
```
{{% /api_example %}}

{{% /api_method %}}
