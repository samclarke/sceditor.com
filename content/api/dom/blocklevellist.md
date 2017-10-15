---
title: blockLevelList
excerpt: String of DOM block level nodes.
---
## BlockLevelList

<article class="api method" markdown="1">
### <a id="blockLevelList" href="#blockLevelList">blockLevelList</a> <span class="since">Since: 1.3.0</span>

Static property containing the names of block-level nodes separated by the bar (&bar;) character.

This is used by the [isInline()](/api/dom/isinline/) method.

Defaults to:

	"|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|"


#### Syntax

	$.sceditor.dom.blockLevelList;

</article>

<article class="ApiMethod">
	<h3 class="ApiMethod__title">
		<a id="blockLevelList" href="#blockLevelList" class="ApiMethod__link">blockLevelList</a>
		<span class="ApiMethod__since">Since: 1.3.0</span>
	</h3>

	<p>Static <strong><a href="/api/types/#string">string</a></strong> property containing the names of block-level nodes separated by the bar (<code>|</code>) character.</p>

	<p>This is used by the <a href="/api/dom/isinline/">isInline()</a> method.</p>

	<p>Defaults to: <code>|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|</code></p>

	<h4 class="ApiMethod__subtitle">Syntax</h4>
	<pre class="language-js"><code>var blocks = sceditor.dom.blockLevelList;

sceditor.dom.blockLevelList = '|p|div|...|';</code></pre>
</article>

{{% api_method name="blockLevelList" since="1.3.0" %}}

Static <strong><a href="/api/types/#string">string</a></strong> property containing the names of block-level nodes separated by the bar (`|`) character.

This is used by the [isInline()](/api/dom/isinline/) method.

Defaults to: `|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|`


    {{% api_section title="Syntax" %}}
    ```js
    var blocks = sceditor.dom.blockLevelList;

    sceditor.dom.blockLevelList = '|p|div|...|';
    ```
    {{% /api_section %}}

{{% /api_method %}}

