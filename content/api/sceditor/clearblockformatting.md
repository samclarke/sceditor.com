---
title: clearBlockFormatting()
excerpt: Clears the formatting of the first block level element that has the cursor
permalink: /api/sceditor/clearblockformatting/
categories:
    - Docs
    - API
    - SCEditor-API
---
## ClearBlockFormatting()

<article class="api method" markdown="1">
### <a id="clearBlockFormatting" href="#clearBlockFormatting">clearBlockFormatting()</a> <span class="since">Since: 1.4.4</span>

Clears the formatting of the first block level element that contains the cursor.


#### Syntax

	instance.clearBlockFormatting();


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>



<article class="api method" markdown="1">
### <a id="clearBlockFormatting-element" href="#clearBlockFormatting-element">clearBlockFormatting(element)</a> <span class="since">Since: 1.4.4</span>

Clears the formatting of the passed element by removing all CSS classes, all inline styling and if it isn't a `p` or `div` tag by converting it into a `p` tag.


#### Syntax

	instance.clearBlockFormatting(element);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**element**  
Type: **[HTMLElement](/api/types/#htmlelement)**

The DOM element to remove the formatting from.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>

