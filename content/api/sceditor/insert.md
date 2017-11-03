---
title: insert()
excerpt: Inserts HTML/BBCode into the editor.
---
## insert()

{{% api_method name="insert(value)" since="1.3.5" %}}

Inserts text into the editor at the position of the cursor.

If `end` is not null and there is some selected text, the selected text will be placed between the `start` and `end` strings.

If there is no selection and `end` is set, it will just be appended to the end of `start` before inserting.


{{% api_section title="Syntax" %}}
```js
instance.insert(start[, end][, filter][, convertEmoticons][, mixedValue]);
```
{{% /api_section %}}


{{% api_parameters %}}
{{% api_parameter %}}
**start**  
Type: *[String](/api/types/#string)*

The value to insert
{{% /api_parameter %}}

{{% api_parameter %}}
**filter**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to filter the value through any plugins. For example if using the BBCode format, should this filter 
{{% /api_parameter %}}

{{% api_parameter %}}
**convertEmoticons**  
Type: *[Boolean](/api/types/#bool)*  
Default: `true`

If to convert emoticons codes (`:)`) into emoticons.
{{% /api_parameter %}}

{{% api_parameter %}}
**mixedValue**  
Type: *[Boolean](/api/types/#bool)*  
Default: `false`  
Since: 1.4.3

If to allow both HTML and filtered content (BBCode if using the BBCode format) at the same time. If `filter` is not set to `true` this option will have no effect.
{{% /api_parameter %}}
{{% /api_parameters %}}


{{% api_section title="Return" %}}
Type: **[sceditor](/api/types/#sceditor)**
{{% /api_section %}}


{{% api_example %}}
Inserting HTML:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

instance.insert('Hello <strong>World!</strong>');
```

If using the BBCode format, BBCode should be passed instead of HTML:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

instance.insert('Hello [b]World![/b]');
```

If `filter` is set to `false`, HTML can be passed even when using the BBCode format:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

instance.insert('Hello <strong>World!</strong>', false);
```

The `mixedValue` allows both HTML and filtered text (BBCode if using the BBCode format) to be inserted at the same time:

```js
var textarea = ...;
var instance = sceditor.instance(textarea);

instance.insert(
    '[b]BBCode[/b] and <strong>HTML!</strong>',
    true, // filter
    true, // convert emoticons
    true  // allow mixed
);
```
{{% /api_example %}}

{{% /api_method %}}
