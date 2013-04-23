---
layout: api
title: selectOuterText()
permalink: /api/rangehelper/selectoutertext/
excerpt: Selects the text left and right of the current selection/caret.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## SelectOuterText()

<article class="api method" markdown="1">
### <a id="selectOuterText" href="#selectOuterText">selectOuterText(left, right)</a> <span class="since">Since: 1.4.3</span>

Selects the text left and/or right of the current selection/caret.


#### Syntax

	instance.selectOuterText(left, right);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**left**  
Type: **[Integer](/api/types/#int)**

Number of characters left of the current selection to select. Set to `0` to not select any.
</div>

<div class="parameter" markdown="1">
**right**  
Type: **[Integer](/api/types/#int)**

Number of characters right of the current selection to select. Set to `0` to not select any.
</div>
</div>
</article>
