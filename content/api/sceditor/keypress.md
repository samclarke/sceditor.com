---
title: keyPress()
excerpt: Binds a handler the key press changed event.
---
## keyPress()

{{% api_method name="keyPress(func)" since="1.4.1" %}}

Binds a handler to the key press event on the editor.


{{% api_section title="Syntax" %}}
```js
instance.keyPress(func[, excludeWysiwyg][, excludeSource]);
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
sceditor.instance(textarea).keyPress(function(e) {
	alert('Key press event fired.');
});
```
{{% /api_example %}}

{{% /api_method %}}
