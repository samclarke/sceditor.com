---
title: maximize()
excerpt: Gets or sets if the editor is maximised.
permalink: /api/sceditor/maximize/
categories:
    - Docs
    - API
    - SCEditor-API
---
## maximize()


{{% api_method name="maximize()" since="1.4.1" %}}

Gets if the editor is maximised or not


{{% api_section title="Syntax" %}}
```js
var isMaximised = instance.maximize();
```
{{% /api_section %}}


{{% api_section title="Return" %}}
Type: **[boolean](/api/types/#boolean)**
{{% /api_section %}}

{{% /api_method %}}



{{% api_method name="maximize(maximize)" since="1.4.1" %}}

Sets if the editor is maximised or not


{{% api_section title="Syntax" %}}
```js
instance.maximize(maximize);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**maximize**  
Type *[boolean](/api/types/#boolean)*

If to maximize the editor or not
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}

Maximise the editor:

```js
var textarea = ...;
sceditor.instance(textarea).maximize(true);
```

Set the editor back to normal:

```js
var textarea = ...;
sceditor.instance(textarea).maximize(false);
```
{{% /api_example %}}

{{% /api_method %}}
