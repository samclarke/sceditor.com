---
layout: api
title: _()
excerpt: Translates a string into the current locale.
permalink: /api/sceditor/underscore/
categories:
    - Docs
    - API
    - SCEditor-API
---
## _()

<article class="api method" markdown="1">
### <a id="_" href="#_">_(str, args)</a> <span class="since">Since: 1.3.0</span>

Translates a string into the locale language. Replaces {0}, {1}, {2}, ect. with the arguments provided.


#### Syntax

	instance.bind(str[, arg1[, arg2[, ...]]]);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**str**  
Type: *[String](/api/types/#string)*

The string to translate.
</div>

<div class="parameter" markdown="1">
**arg1, arg2, ...**  
Type: *[String](/api/types/#string)*

Arguments to replace in the transalted string.
</div>
</div>


#### Return

Type: **[String](/api/types/#string)**


<article class="api examples" markdown="1">
### Examples

	var boldTranslation = $('textarea').sceditor('instance')._('Bold');
	var helloWorld      = $('textarea').sceditor('instance')._('Hello {0}!', 'World');

</article>
</article>

