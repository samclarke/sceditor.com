---
title: maximize()
excerpt: Gets or sets if the editor is maximised.
permalink: /api/sceditor/maximize/
categories:
    - Docs
    - API
    - SCEditor-API
---
## Maximize()

<article class="api method" markdown="1">
### <a id="maximize" href="#maximize">maximize()</a> <span class="since">Since: 1.4.1</span>

Gets if the editor is maximised or not


#### Syntax

	var isMaximised = instance.maximize();


#### Return

Type: **[Boolean](/api/types/#bool)**
</article>



<article class="api method" markdown="1">
### <a id="maximize-maximize" href="#maximize-maximize">maximize(maximize)</a> <span class="since">Since: 1.4.1</span>

Sets if the editor is maximised or not


#### Syntax

	instance.maximize(maximize);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**maximize**  
Type: *[Boolean](/api/types/#bool)*  

If to maximize the editor or not.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**


<article class="api examples" markdown="1">
### Examples

Maximise the editor:

	$('textarea').sceditor('instance').maximize(true);


Set the editor back to normal:

	$('textarea').sceditor('instance').maximize(false);

</article>
</article>

