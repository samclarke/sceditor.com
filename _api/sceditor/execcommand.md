---
layout: api
title: execCommand()
excerpt: Executes a native browser WYSIWYG command.
permalink: /api/sceditor/execcommand/
categories:
    - Docs
    - API
    - SCEditor-API
---
## ExecCommand()

<article class="api method" markdown="1">
### <a id="execCommand" href="#execCommand">execCommand(command, param)</a> <span class="since">Since: 1.3.0</span>

Executes a native browser content editable command against the WYSIWYG editor.

*Important:* There are some inconsistencies in how commands are handled across browsers and not all browsers support all commands.


#### Syntax

	instance.execCommand(command, param);


#### Parameters

<div class="parameters">
<div class="parameter" markdown="1">
**command**  
Type: *[String](/api/types/#string)*

Name of the command. See [Rich-Text Editing in Mozilla](https://developer.mozilla.org/en/docs/Rich-Text_Editing_in_Mozilla) for a list of commands.
</div>

<div class="parameter" markdown="1">
**param**  
Type: *[String](/api/types/#string)*

The param, if any, to pass when executing the command.
</div>
</div>
</article>
