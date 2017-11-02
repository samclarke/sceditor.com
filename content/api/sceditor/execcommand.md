---
title: execCommand()
excerpt: Executes a native browser WYSIWYG command.
---
## execCommand()

{{% api_method name="execCommand(command, param)" since="1.3.0" %}}

Executes a native browser content editable command against the WYSIWYG editor.

*Important:* There are some inconsistencies in how commands are handled across browsers and not all browsers support all commands.


{{% api_section title="Syntax" %}}
```js
instance.execCommand(command, param);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**command**  
Type: *[String](/api/types/#string)*

Name of the command. See [Rich-Text Editing in Mozilla](https://developer.mozilla.org/en/docs/Rich-Text_Editing_in_Mozilla) for a list of commands.
{{% /api_parameter %}}

{{% api_parameter %}}
**param**  
Type: *[String](/api/types/#string)*

The param, if any, to pass when executing the command.
{{% /api_parameter %}}
{{% /api_parameters %}}

{{% /api_method %}}
