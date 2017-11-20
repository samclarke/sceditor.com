---
title: bind()
excerpt: Binds a handler to an event.
---
## bind()

{{% api_method name="bind(events, func)" since="1.4.1" %}}

Binds a handler to the specified events.

Unlike the jQuery bind() method, this method only binds a limited set of supported events.

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
 * pasteraw
 * paste


{{% api_section title="Syntax" %}}
```js
instance.bind(events, func[, excludeWysiwyg][, excludeSource]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**events**  
Type: *[String](/api/types/#string)*

List of events separated by spaces to bind the handler to.
{{% /api_parameter %}}

{{% api_parameter %}}
**func**  
Type: *[Function](/api/types/#function)*

Function that will be called when the event occurs
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeWysiwyg**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the handler to the WYSIWYG editor.
{{% /api_parameter %}}

{{% api_parameter %}}
**excludeSource**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to not bind the handler to the source editor.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
```js
var textarea = ...;
sceditor.instance(textarea).bind('keypress', function(e) {
    alert('Key pressed');
});
```
{{% /api_example %}}

{{% /api_method %}}
