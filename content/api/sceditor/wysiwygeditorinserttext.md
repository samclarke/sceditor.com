---
title: wysiwygEditorInsertText()
excerpt: Inserts text into the WYSIWYG editor.
---
## wysiwygEditorInsertText()

{{% api_method name="wysiwygEditorInsertText(start)" since="1.3.0" %}}

Inserts text into WYSIWYG editor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.

<span class="Label Label--info">Info:</span> Using the [insert()](/api/sceditor/val/) method is the prefered way of inserting HTML into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the correct editor.


{{% api_section title="Syntax" %}}
```js
instance.wysiwygEditorInsertText(start[, end]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: *[String](/api/types/#string)*

The text to insert
{{% /api_parameter %}}

{{% api_parameter %}}
**end**  
Type: *[String](/api/types/#string)*  
Default: `null`

If this is not null and there is some text selected, the selected text will be wrappend in the `start` and `end` strings. If there is no selected text, this will just be appended to the end of `start`
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
