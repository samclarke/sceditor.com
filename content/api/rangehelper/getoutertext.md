---
title: getOuterText()
permalink: /api/rangehelper/getoutertext/
excerpt: Gets the text left or right of the current selction/caret.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## GetOuterText()

<article class="api method" markdown="1">
### <a id="getOuterText" href="#getOuterText">getOuterText(before, length)</a> <span class="since">Since: 1.4.3</span>

Gets the text left or right of the current selction/caret.


#### Syntax

	var text = instance.getOuterText(before, length);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**before**  
Type: **[Boolean](/api/types/#bool)**

If to get the text before or after the current selection.
</div>

<div class="parameter" markdown="1">
**length**  
Type: **[Integer](/api/types/#int)**

The number of characters to get from the left or right of the current selection.
</div>
</div>


#### Return

Type: **[String](/api/types/#string)**



<article class="api examples" markdown="1">
### Examples

Get 10 characters before the current selection:

	var text = $('textarea').sceditor('instance').getRangeHelper().getOuterText(true, 10);


Get 5 characters after the current selection:

	var text = $('textarea').sceditor('instance').getRangeHelper().getOuterText(false, 5);

</article>
</article>
