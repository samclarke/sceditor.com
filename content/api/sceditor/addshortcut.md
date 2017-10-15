---
title: addShortcut()
excerpt: Adds a shortcut handler to the editor.
permalink: /api/sceditor/addshortcut/
categories:
    - Docs
    - API
    - SCEditor-API
---
## AddShortcut()

<article class="ApiMethod" markdown="1">
### <a id="addShortcut" href="#addShortcut">addShortcut()</a> <span class="since">Since: 1.4.3</span>

Adds a shortcut handler to the editor. If a handler for the specified shortcut already exists, it will be replaced.

The shortcut shoult be a string of keys separated by plus (+) signs and the modifier keys should be ordered `ctrl`, `alt` and then `shift`.

e.g.:

	ctrl+alt+s
	alt+shift+a
	ctrl+shift+b
	alt+b


<span class="Label Label--info">Info:</span> The shortcut is binded to both WYSIWYG and source modes. It's up to the shortcut handler to check which mode the editor is in and take appropriate action.


#### Syntax

	instance.addShortcut(shortcut, handler);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**shortcut**
Type: *[String](/api/types/#string)*

The shortcut string to match.
</div>

<div class="parameter" markdown="1">
**handler**
Type *[Function](/api/types/#function)* or *[String](/api/types/#string)*

The function to be called when the shortcut is pressed or a string. If this is a string, it will call the command with the same name as the passed string.
</div>
</div>


#### Return

Type: **[sceditor](/api/types/#sceditor)**
</article>