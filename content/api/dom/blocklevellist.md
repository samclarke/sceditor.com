---
title: blockLevelList
excerpt: String of DOM block level nodes.
---
## blockLevelList

{{% api_method name="blockLevelList" since="1.3.0" %}}

Static **[string](/api/types/#string)** property containing the names of block-level nodes separated by the bar (`|`) character.

This is used by the [isInline()](/api/dom/isinline/) method.

Defaults to: `|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|`


{{% api_section title="Syntax" %}}
```js
var blocks = sceditor.dom.blockLevelList;

sceditor.dom.blockLevelList = '|p|div|...|';
```
{{% /api_section %}}

{{% /api_method %}}

