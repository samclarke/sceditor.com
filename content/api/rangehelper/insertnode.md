---
title: insertNode()
excerpt: Inserts a DOM node at the current selection.
---
## insertNode()

{{% api_method name="insertNode(startNode[, endNode])" since="1.3.5" %}}

Inserts a DOM node at the position of the current selection.

See the [insertHTML()](/api/rangehelper/inserthtml/) method for the HTML equivalent.

<span class="Label Label--info">Info:</span> Using the [sceditor.insert()](/api/sceditor/val/) method is the preferred way of inserting HTML into the editor as it checks if the editor is in WYSIWYG or source mode and insert it into the appropriate place.

<div class="Callout Callout--warning">
	<h3 class="Callout__header">Warning!</h3>
	<p>The DOM nodes must belong to the <code>document</code> they are being inserted in. If they belong to another <code>document</code>, an error will be thrown.</p>
</div>


{{% api_section title="Syntax" %}}
```js
instance.insertNode(startNode[, endNode]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: **[Node](/api/types/#node)**

The DOM node to insert.
{{% /api_parameter %}}

{{% api_parameter %}}
**end**  
Type: **[Node](/api/types/#node)**
Default: `null`

If specified and there is any text selected, the selected text will be placed between the `start` and `end` nodes.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
