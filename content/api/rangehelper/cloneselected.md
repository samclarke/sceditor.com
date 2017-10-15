---
title: cloneSelected()
permalink: /api/rangehelper/cloneselected/
excerpt: Clones the current range.
categories:
    - Docs
    - API
    - RangeHelper-API
---
## CloneSelected()

<article class="api method" markdown="1">
### <a id="cloneSelected" href="#cloneSelected">cloneSelected()</a> <span class="since">Since: 1.3.5</span>

Clones the current range.


#### Syntax

	var range = instance.cloneSelected();


#### Return

Type: **[Range](/api/types/#range)** or **[TextRange](/api/types/#textrange)**

Returns a `TextRange` for IE &lt;= 8., returns a `Range` in all other browsers.

Will return `null` if there is no current selection to clone.
</article>
