---
title: focus()
excerpt: Binds a handler to the focus event, or triggers the focus event.
---
## focus()

{{% api_method name="focus()" since="1.3.0" %}}

Focuses the editor.


{{% api_section title="Syntax" %}}
```js
instance.focus();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}


{{% api_method name="focus(func)" since="1.4.1" %}}

Binds a handler to the focus event. This is just a shortcut for:

```js
instance.bind('focus', func[, excludeWysiwyg][, excludeSource]);
```


{{% api_section title="Syntax" %}}
```js
instance.focus(func[, excludeWysiwyg][, excludeSource]);
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
sceditor.instance(textarea).focus(function(e) {
	alert('Gained focus');
});
```
{{% /api_example %}}

{{% /api_method %}}
