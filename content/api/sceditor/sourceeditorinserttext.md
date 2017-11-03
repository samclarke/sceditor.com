---
title: sourceEditorInsertText()
excerpt: Inserts text into the source editor.
---
## sourceEditorInsertText()

{{% api_method name="sourceEditorInsertText(value)" since="1.3.5" %}}

Inserts text into the source editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.

<span class="Label Label--info">Info:</span> Using the [insertText()](/api/sceditor/insertText/) method is the prefered way of inserting text into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the correct one.


{{% api_section title="Syntax" %}}
```js
instance.sourceEditorInsertText(start[, end]);
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

If not null and there is some text selected, the selected text will be placed between the `start` and `end` strings.

If there is no selected text, this will just be appended to the end of `start`.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_example %}}
Inserting text:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

instance.sourceEditorInsertText('Hello World!');
```
{{% /api_example %}}

{{% /api_method %}}