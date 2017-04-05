---
layout: api
title: insertText()
excerpt: Inserts text into the editor.
permalink: /api/sceditor/inserttext/
categories:
    - Docs
    - API
    - SCEditor-API
---
## InsertText()

<article class="api method" markdown="1">
### <a id="insertText" href="#insertText">insertText(start)</a> <span class="since">Since: 1.3.5</span>

Inserts text into the editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.


#### Syntax

    instance.insertText(start[, end]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: *[String](/api/types/#string)*

The text to insert
</div>

<div class="parameter" markdown="1">
**end**  
Type: *[String](/api/types/#string)*  
Default: `null`

If not null and there is some text selected, the selected text will be placed between the `start` and `end` strings.

If there is no selected text, this will just be appended to the end of `start`.
</div>
</div>

#### Return

Type: **[sceditor](/api/types/#sceditor)**

<article class="api examples" markdown="1">
### Examples

Inserting some text:

	$('textarea').sceditor('instance').insertText('Hello World!');

</article>
</article>

