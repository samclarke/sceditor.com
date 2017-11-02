---
title: getWysiwygEditorValue()
excerpt: Gets the current WYSIWYG editor value.
---
## getWysiwygEditorValue()

{{% api_method name="getWysiwygEditorValue()" since="1.3.0" %}}

Gets the WYSIWYG editors current HTML value.

If using a format that like the BBCode format, this will return the result of the running the value through the format.

If the `filter` parameter is set to false, this will return the unfiltered contents of the source editor (BBCode if using the BBCode format).

<span class="Label Label--info">Info:</span> Using the [val()](/api/sceditor/val/) method is the preferred way of getting the editors value. It will check if the editor is in WYSIWYG or source mode and return the appropriate value.


{{% api_section title="Syntax" %}}
```js
var val = instance.getWysiwygEditorValue([filter]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through the current format. Will cause the HTML to be converted to BBCode if using the BBCode format.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[String](/api/types/#string)**
{{% /api_section %}}

{{% /api_method %}}
