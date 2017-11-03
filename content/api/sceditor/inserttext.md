---
title: insertText()
excerpt: Inserts text into the editor.
---
## insertText()

{{% api_method name="insertText(value)" since="1.4.3" %}}

Inserts text into the editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.


{{% api_section title="Syntax" %}}
```js
instance.insertText(start[, end]);
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


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Inserting text:

```js
var textarea = ...;
sceditor.instance(textarea).insertText('Hello World!');
```
{{% /api_example %}}

{{% /api_method %}}
