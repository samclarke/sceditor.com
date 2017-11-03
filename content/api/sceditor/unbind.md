---
title: unbind()
excerpt: Unbinds a handler from an event.
---
## unbind()

{{% api_method name="unbind(events, func)" since="1.4.1" %}}

Unbinds a handler to the specified events.

Unlike the jQuery unbind() method, this method only works with a limited set of supported events.

The supported events are:

 * keyup
 * keydown
 * keypress
 * blur
 * focus
 * contextmenu
 * nodechanged  
   When the current node containing the selection changes in WYSIWYG mode
 * valuechange  
   Triggered when the editors value changes (this isn't called after every
   key press)
 * selectionchanged
   When the editors selection changes (triggered a lot)


{{% api_section title="Syntax" %}}
```js
instance.unbind(events, func[, excludeWysiwyg][, excludeSource]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**events**  
Type: *[String](/api/types/#string)*

List of events separated by spaces to unbind the handler from.
{{% /api_parameter %}}

{{% api_parameter %}}
**func**  
Type: *[Function](/api/types/#function)*

Function that to unbind
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not unbind the event from the WYSIWYG editor.
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not unbind the event from the source editor.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}

{{% /api_method %}}
