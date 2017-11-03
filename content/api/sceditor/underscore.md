---
title: _()
excerpt: Translates a string into the current locale.
---
## _()

{{% api_method name="_(str, args)" since="1.3.0" %}}

Translates a string into the language current used by the editor.

The strings {0}, {1}, {2}, ect. will be replaced with the arguments provided.


{{% api_section title="Syntax" %}}
```js
instance._(str[, arg1[, arg2[, ...]]]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**str**  
Type: *[String](/api/types/#string)*

The string to translate.
{{% /api_parameter %}}

{{% api_parameter %}}
**arg1, arg2, ...**  
Type: *[String](/api/types/#string)*

Arguments to replace in the transalted string.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[String](/api/types/#string)**
{{% /api_section %}}


{{% api_example %}}
Inserting text:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

var boldTranslation = instance._('Bold');

// helloWorld will be "Hello World!" or the translated version
var helloWorld = instance._('Hello {0}!', 'World');
```
{{% /api_example %}}

{{% /api_method %}}