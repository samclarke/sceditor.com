---
title: readOnly()
excerpt: Gets or sets if the editor is read only.
permalink: /api/sceditor/readonly/
categories:
    - Docs
    - API
    - SCEditor-API
---
## ReadOnly()

<article class="api method" markdown="1">
### <a id="readOnly" href="#readOnly">readOnly()</a> <span class="since">Since: 1.3.5</span>

Gets if the editor is read only


#### Syntax

	var isReadOnly = instance.readOnly();


#### Return

Type: **[Boolean](/api/types/#bool)**
</article>



<article class="api method" markdown="1">
### <a id="readOnly-val" href="#readOnly-val">readOnly(val)</a> <span class="since">Since: 1.3.5</span>

Sets if the editor is read only


#### Syntax

	instance.readOnly(val);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**val**  
Type: *[Boolean](/api/types/#bool)*  

If to make the editor read-only.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Set the editor to read only:

	$('textarea').sceditor('instance').readOnly(true);


Make the editor editable:

	$('textarea').sceditor('instance').readOnly(false);

</article>
</article>

