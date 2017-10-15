---
title: closeDropDown()
excerpt: Closes any open dropdown.
permalink: /api/sceditor/closedropdown/
categories:
    - Docs
    - API
    - SCEditor-API
---
## CloseDropDown()

<article class="api method" markdown="1">
### <a id="closeDropDown" href="#closeDropDown">closeDropDown()</a> <span class="since">Since: 1.3.0</span>

Closes any currently open editor dropdown.


#### Syntax

	instance.closeDropDown([focus]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**focus**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to focus the editor after closing the drop down
</div>
</div>


#### Return

Type: **[Void](/api/types/#void)**


<article class="api examples" markdown="1">
### Examples

	// Close the currently open dropdown if there is one
	$('textarea').sceditor('instance').closeDropDown();

</article>
</article>

