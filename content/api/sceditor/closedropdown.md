---
title: closeDropDown()
excerpt: Closes any open dropdown.
---
## closeDropDown()

{{% api_method name="closeDropDown()" since="1.3.0" %}}

Closes any currently open editor dropdown. If there is no currently open dropdown
this does nothing.


{{% api_section title="Syntax" %}}
```js
instance.closeDropDown([focus]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**focus**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`

If to focus the editor after closing the drop down
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_example %}}
```js
// Close the currently open dropdown if there is one
var textarea = ...;
sceditor.instance(textarea).closeDropDown();
```
{{% /api_example %}}

{{% /api_method %}}
