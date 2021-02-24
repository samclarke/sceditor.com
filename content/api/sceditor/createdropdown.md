---
title: createDropDown()
excerpt: Creates a dropdown.
---
## createDropDown()

{{% api_method name="createDropDown(mItem, name, content)" since="1.3.0" %}}

Creates a dropdown menu aligned to the to the menu item `mItem`.


{{% api_section title="Syntax" %}}
```js
instance.createDropDown(mItem, name, content);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**mItem**  
Type: *[Node](/api/types/#node)*

The menu button to align the drop down to.
{{% /api_parameter %}}

{{% api_parameter %}}
**name**  
Type: *[String](/api/types/#string)*

The name to give the dropdown. Will add the class `sceditor-name` to the dropdown. 
{{% /api_parameter %}}

{{% api_parameter %}}
**content**  
Type: *[Node](/api/types/#node)*

The HTML content of the dropdown.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
