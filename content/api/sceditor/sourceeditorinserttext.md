---
title: sourceEditorInsertText()
excerpt: Inserts text into the source editor.
permalink: /api/sceditor/sourceeditorinserttext/
categories:
    - Docs
    - API
    - SCEditor-API
---
## SourceEditorInsertText()

<article class="api method" markdown="1">
### <a id="sourceEditorInsertText" href="#sourceEditorInsertText">sourceEditorInsertText(start)</a> <span class="since">Since: 1.3.5</span>

Inserts text into the source editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.

<span class="Label Label--info">Info:</span> Using the [insertText()](/api/sceditor/val/) method is the prefered way of inserting text into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the correct one.


#### Syntax

    instance.sourceEditorInsertText(start[, end]);

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

<article class="api examples" markdown="1">
### Examples

Inserting some text into the source editor:

	$('textarea').sceditor('instance').sourceEditorInsertText('Hello World!');

</article>
</article>

