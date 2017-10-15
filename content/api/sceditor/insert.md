---
title: insert()
excerpt: Inserts HTML/BBCode into the editor.
permalink: /api/sceditor/insert/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Insert()

<article class="api method" markdown="1">
### <a id="insert" href="#insert">insert(start)</a> <span class="since">Since: 1.3.5</span>

Inserts text into the editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.


#### Syntax

    instance.insert(start[, end][, filter][, convertEmoticons][, mixedValue]);

#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**start**  
Type: *[String](/api/types/#string)*

The value to insert
</div>

<div class="parameter" markdown="1">
**end**  
Type: *[String](/api/types/#string)*  
Default: `null`

If this is not null and there is some text selected, the selected text will be wrappend in the `start` and `end` strings. If there is no selected text, this will just be appended to the end of `start`
</div>

<div class="parameter" markdown="1">
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins. For example if using the BBCode plugin, should this filter 
</div>

<div class="parameter" markdown="1">
**convertEmoticons**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to convert emoticons codes (`:)`) into emoticons.
</div>

<div class="parameter" markdown="1">
**mixedValue**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`  
Since: 1.4.3

If to allow both HTML and filtered content (BBCode if using the BBCode plugin) at the same time. If `filter` is not set to `true` this option will have no effect.
</div>
</div>

#### Return

Type: **[sceditor](/api/types/#sceditor)**

<article class="api examples" markdown="1">
### Examples

Inserting HTML:

	$('textarea').sceditor('instance').insert('Hello <strong>World!</strong>');


If using the BBCode plugin, BBCode should be passed instead of HTML:

	$('textarea').sceditor('instance').insert('Hello [b]World![/b]');


If `filter` is set to `false`, HTML can be passed even when using the BBCode plugin:

	$('textarea').sceditor('instance').insert('Hello <strong>World!</strong>', false);


The `mixedValue` allows both HTML and filtered text (BBCode if using the BBCode plugin) to be inserted at the same time:

	$('textarea').sceditor('instance').insert('[b]BBCode[/b] and <strong>HTML!</strong>', true, true, true);

</article>
</article>

