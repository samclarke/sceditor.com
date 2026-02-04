---
title: insertHTML()
excerpt: Inserts HTML at the selection.
---
## insertHTML()

{{% api_method name="insertHTML(startHtml[, endHtml])" since="1.3.5" %}}

Inserts some HTML at the position of the current selection.

<span class="Label Label--info">Info:</span> Using the [sceditor.insert()](/api/sceditor/insert/) method is the preferred way of inserting HTML into the editor as it checks if the editor is in WYSIWYG or source mode and insert it into the appropriate place.


{{% api_section title="Syntax" %}}
```js
instance.insertHTML(startHtml[, endHtml]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: **[String](/api/types/#string)**

The HTML to insert.
{{% /api_parameter %}}

{{% api_parameter %}}
**end**  
Type: **[String](/api/types/#string)**
Default: `null`

If specified and there is any text selected, the selected text will be placed between `start` and `end`.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
