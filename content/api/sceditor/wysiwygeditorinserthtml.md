---
title: wysiwygEditorInsertHtml()
excerpt: Inserts HTML into the WYSIWYG editor.
permalink: /api/sceditor/wysiwygeditorinserthtml/
categories:
    - Docs
    - API
    - SCEditor-API
---
## WysiwygEditorInsertHtml()

<article class="api method" markdown="1">
### <a id="wysiwygEditorInsertHtml" href="#wysiwygEditorInsertHtml">wysiwygEditorInsertHtml(start)</a> <span class="since">Since: 1.3.0</span>

Inserts HTML into WYSIWYG editor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.

<span class="Label Label--info">Info:</span> Using the [insert()](/api/sceditor/insert/) method is the prefered way of inserting HTML into the editor. It will check if the editor is in WYSIWYG or source mode and insert into the correct editor.


#### Syntax

    instance.wysiwygEditorInsertHtml(start[, end]);

#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: *[String](/api/types/#string)*

The HTML to insert
</div>

<div class="parameter" markdown="1">
**end**  
Type: *[String](/api/types/#string)*  
Default: `null`

If this is not null and there is some text selected, the selected text will be wrappend in the `start` and `end` strings. If there is no selected text, this will just be appended to the end of `start`
</div>
</div>
</article>

