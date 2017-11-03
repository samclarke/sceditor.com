---
title: nodeChanged()
excerpt: Binds a handler the node changed event.
---
## nodeChanged()

{{% api_method name="nodeChanged(func)" since="1.4.1" %}}

Binds a handler to the WYSIWYG nodeChanged event.

This will fire whenever the DOM node that contains the caret changes.

This event will only fire in the WYSIWYG editor as the source editor is text based so doesn't have any DOM nodes to cause the event.


{{% api_section title="Syntax" %}}
```js
instance.nodeChanged(func);
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
sceditor.instance(textarea).nodeChanged(function(e) {
	alert('Current node has changed');
});
```
{{% /api_example %}}

{{% /api_method %}}
