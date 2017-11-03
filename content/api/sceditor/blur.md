---
title: blur()
excerpt: Binds a handler to the blur event, or triggers the blur event.
---
## blur()

{{% api_method name="blur()" since="1.3.6" %}}

Triggers the blur event, removing the focus from the editor.


{{% api_section title="Syntax" %}}
```js
instance.blur();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="blur(func)" since="1.4.1" %}}

Binds a function to the blur event.

This is just a shortcut for:

```js
instance.bind('blur', func[, excludeWysiwyg][, excludeSource]);
```


{{% api_section title="Syntax" %}}
```js
instance.blur(func[, excludeWysiwyg][, excludeSource]);
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
sceditor.instance(textarea).blur(function() {
	alert('Lost focus');
});
```
{{% /api_example %}}

{{% /api_method %}}
