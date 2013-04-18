---
layout: doc
title: Custom Commands
permalink: /documentation/custom-commands/
categories:
    - Docs
---

## Adding Custom Commands <a id="custom-commands"></a>

### Creating/Updating a Custom Command<a id="creating-command"></a>

To add/update a command use the `$.sceditor.command.set()` function.

<span class="label label-warning">Warning:</span>  This function will update any existing command with the same name.

The `$.sceditor.command.set()` function takes two arguments, `name` and `cmd`.

* **name** *String*  
  The name of the command, used to include it in the toolbar. Must be lower-case!
* **cmd** *Object*  
  The command object. See below for more details of this.

<pre class="prettyprint linenums">
$.sceditor.command.set("commandname", {
	exec: function() {
		this.insert("a");
	},
	txtExec: function() {
		this.insert("a");
	},
	tooltip: "Insert the letter a"
});
</pre>

To add an icon to the command use the the following CSS:

<pre class="prettyprint linenums">
.sceditor-button-[name] div { background: url('/images/icon.png'); }
</pre>

where `[name]` is the name used with `$.sceditor.command.set()`. See [Theming](/documentation/theming/) for more information.

Once you've created a command you can add it to the editor toolbar via the [toolbar option](/documentation/options/#toolbar).


### Structure of a command object: <a id="command-structure"></a>

<pre class="prettyprint linenums">
{
	exec: undefined,
	errorMessage: undefined,
	txtExec: undefined,
	tooltip: undefined
}
</pre>


### exec <a id="exec"></a>

**exec** *String or function*

Executed whenever the command is click in WYSIWYG mode.

Should be either a string which will be passed to the browsers native `execCommand()` function.

Or a function that takes 1 argument, `caller`. The functions `this` will be set to the editors instance.

* **caller** *HTMLElement*  
  The commands HTML button element or null.

**Example**

<pre class="prettyprint linenums">
exec: function () {
	this.insert("[b]Hello World[/b]");
}
</pre>

<pre class="prettyprint linenums">
// Bold will be passed to the native execCommand
exec: "bold"
</pre>


### errorMessage <a id="errorMessage"></a>

**errorMessage** *String*

Error message to show if the `exec` fails when calling the browsers native `execCommand()`. Only applies if `exec` is a string.


### txtExec <a id="txtExec"></a>

**txtExec** *String or array*

Should be either an array containing 1-2 strings or a function.

If set to an array and has two strings, then any selected content will be surrounded with both strings and the cursor placed before the last one. If the array has only 1 string and there is any selected content, the selected content will be replaced and the cursor placed after the inserted string.

If `txtExec` is a function it should take 1 argument, `caller`. The functions `this` will be set to the editor.

* **caller** *HTMLElement*  #
  The commands HTML button element or null.

**Example**

<pre class="prettyprint linenums">
txtExec: function () {
	this.insert("[b]Hello World[/b]");
}
</pre>

<pre class="prettyprint linenums">
txtExec: ["[b]", "[/b]"]
</pre>


### tooltip <a id="tooltip"></a>

**tooltip** *String*

The tooltip to show when the users mouse hovers over the command.

