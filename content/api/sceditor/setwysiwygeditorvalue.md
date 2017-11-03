---
title: setWysiwygEditorValue()
excerpt: Sets the WYSIWYG editors value.
---
## setWysiwygEditorValue()

{{% api_method name="setWysiwygEditorValue(val)" since="1.3.0" %}}

Sets the current value of the WYSIWYG editor.

<span class="Label Label--info">Info:</span> Using the [val()](/api/sceditor/val/) method is the prefered way of setting the editors value. It will check if the editor is in WYSIWYG or source mode and set the appropriate value.


{{% api_section title="Syntax" %}}
```js
instance.setWysiwygEditorValue(val);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**val**  
Type: *[String](/api/types/#string)*

The value to set. Should be HTML.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
