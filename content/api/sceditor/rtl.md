---
title: rtl()
excerpt: Gets or sets if the editor is in Right-To-Left mode.
permalink: /api/sceditor/rtl/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Rtl()

<article class="api method" markdown="1">
### <a id="rtl" href="#rtl">rtl()</a> <span class="since">Since: 1.4.1</span>

Gets if the editor is in Right-To-Left mode.

The default Right-To-Left mode will be picked up from the parent node of the editor.


#### Syntax

	var isRtl = instance.rtl();


#### Return

Type: **[Boolean](/api/types/#bool)**
</article>



<article class="api method" markdown="1">
### <a id="rtl-val" href="#rtl-val">rtl(val)</a> <span class="since">Since: 1.4.1</span>

Sets if the editor is in Right-To-Left mode


#### Syntax

	instance.rtl(val);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to make the editor into RTL mode.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the editor to right-to-left:

	$('textarea').sceditor('instance').rtl(true);


Set the editor to left-to-right:

	$('textarea').sceditor('instance').rtl(false);

</article>
</article>

