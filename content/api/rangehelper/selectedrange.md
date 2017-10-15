---
title: selectedRange()
permalink: /api/rangehelper/selectedrange/
excerpt: Gets the currently selected Range.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## SelectedRange()

<article class="api method" markdown="1">
### <a id="selectedRange" href="#selectedRange">selectedRange()</a> <span class="since">Since: 1.3.5</span>

Gets the currently selected DOM range.


#### Syntax

	var range = instance.selectedRange();


#### Return

Type: **[Range](/api/types/#range)** or **[TextRange](/api/types/#textrange)**

Returns a `TextRange` for IE &lt;= 8., returns a `Range` in all other browsers.

Will return `null` if there is currently no selection.
</article>
