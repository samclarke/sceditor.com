---
title: dimensions()
excerpt: Gets or sets the width and height of the editor.
---
## dimensions()

{{% api_method name="dimensions()" since="1.4.1" %}}

Gets the current dimensions of the editor.


{{% api_section title="Syntax" %}}
```js
var dimensions = instance.dimensions();
```
{{% /api_section %}}

{{% api_section title="Return" %}}
Type: **[Object](/api/types/#object)**

Object with the properties `width` and `height`.
{{% /api_section %}}


{{% api_example %}}
Get the current width and height:

```js
var textarea   = ...;
var dimensions = sceditor.instance(textarea).dimensions();
var width      = dimensions.width;
var height     = dimensions.height;
```
{{% /api_example %}}

{{% /api_method %}}


{{% api_method name="dimensions(width, height)" since="1.4.1" %}}

Sets the current dimensions of the editor.


{{% api_section title="Syntax" %}}
```js
instance.dimensions(width, height[, save]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**width**  
Type: *[int](/api/types/#int)* or *[string](/api/types/#string)*

The width in pixels or a string percentage e.g. `100%`. 
{{% /api_parameter %}}

{{% api_parameter %}}
**height**  
Type: *[int](/api/types/#int)* or *[string](/api/types/#string)*

The height in pixels or a string percentage e.g. `100%`. 
{{% /api_parameter %}}

{{% api_parameter %}}
**save**  
Type: *[boolean](/api/types/#bool)*
Default: `true`

If to save the new sizes, this should normally be left as true.

The saved sizes are used for things like restoring from maximized state.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Set the current width to `100%` and the height to `300px`:

```js
var textarea = ...;
sceditor.instance(textarea).dimensions('100%', 300);
```
{{% /api_example %}}

{{% /api_method %}}
