---
title: css()
excerpt: Gets or sets inline CSS in the WYSIWYG editor.
---
## css()

{{% api_method name="css()" since="1.4.3" %}}

Gets the current inline CSS of the WYSIWYG editor.


{{% api_section title="Syntax" %}}
```js
var css = instance.css();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[string](/api/types/#string)**
{{% /api_section %}}

{{% /api_method %}}


{{% api_method name="css(value)" since="1.4.3" %}}

Sets the current inline CSS of the WYSIWYG editor.

<span class="Label Label--important">Important:</span> Changing the editor CSS can cause browser incompatibility issues. 


{{% api_section title="Syntax" %}}
```js
instance.css(value);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**css**  
Type: *[string](/api/types/#string)*

The CSS to add.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Change the default font colour:

```js
var textarea = ...;
sceditor.instance(textarea).css('body { color: #ff0; }');
```
{{% /api_example %}}

{{% /api_method %}}
