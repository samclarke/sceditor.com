---
title: insertNodeAt()
excerpt: Inserts a DOM node at the start or end current selection.
---
## insertNodeAt()

{{% api_method name="insertNodeAt(start)" since="1.3.5" %}}

Inserts a DOM node at the start or end of the current selection.

<div class="Callout Callout--warning">
	<h3 class="Callout__header">Warning!</h3>
	<p>The DOM node must belong to the <code>document</code> it is being inserted into. If it belongs to another <code>document</code> an error will be thrown.</p>
</div>


{{% api_section title="Syntax" %}}
```js
instance.insertNodeAt(start, node);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: **[Boolean](/api/types/#bool)**

If to insert the node at the start or end of the current selection
{{% /api_parameter %}}

{{% api_parameter %}}
**node**  
Type: **[Node](/api/types/#node)**

The DOM node to insert.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
