---
title: val()
excerpt: Gets or sets the editors value.
---
## val()

{{% api_method name="val()" since="1.3.5" %}}

Gets the current value of the editor.

This will return the filtered HTML from the WYSIWYG editor or the unfiltered contents of the source editor.

If using a format like the BBCode format, this will return the filtered HTML i.e. BBCode in the case of the BBCode format.

{{% api_section title="Syntax" %}}
```js
var val = instance.val();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[String](/api/types/#string)**

The filtered value of the editor
{{% /api_section %}}

{{% /api_method %}}






{{% api_method name="val(value)" since="1.3.5" %}}

Sets the value of the editor.

If the `filter` parameter is *not* set to `false` the value will be run through the current editor format. This means that if using a format like BBCode, the value passed to this method should be BBCode and not HTML.

{{% api_section title="Syntax" %}}
```js
instance.val(value[, filter]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**value**  
Type: *[String](/api/types/#string)*

String to set as the editors value
{{% /api_parameter %}}

{{% api_parameter %}}
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Setting the value:

```js
sceditor.instance(textarea)
	.val('Hello <strong>World!</strong>');
```

If using the BBCode plugin, BBCode should be passed instead of HTML:

```js
sceditor.instance(textarea)
	.val('Hello [b]World![/b]');
```

If `filter` is set to `false`, HTML can be passed even when using the BBCode plugin:

```js
sceditor.instance(textarea)
	.val('Hello <strong>World!</strong>', false);
```
{{% /api_example %}}

{{% /api_method %}}
