---
layout: api
title: sourceMode()
excerpt: Gets or sets if the editor is in source mode.
permalink: /api/sceditor/sourcemode/
categories:
    - Docs
    - API
    - SCEditor-API
---
## SourceMode()

<article class="api method" markdown="1">
### <a id="sourceMode" href="#sourceMode">sourceMode()</a> <span class="since">Since: 1.4.0</span>

Gets if the editor is in source mode.


#### Syntax

	var isInSourceMode = instance.sourceMode();


#### Return

Type: **[Boolean](/api/types/#bool)**
</article>



<article class="api method" markdown="1">
### <a id="sourceMode-val" href="#sourceMode-val">sourceMode(val)</a> <span class="since">Since: 1.4.0</span>

Sets if the editor is in source mode.


#### Syntax

	instance.sourceMode(val);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to put the editor into source mode or not.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the editor to source mode:

	$('textarea').sceditor('instance').sourceMode(true);


Set the editor to WYSIWYG mode:

	$('textarea').sceditor('instance').sourceMode(false);

</article>
</article>

