---
title: Custom Commands
permalink: /documentation/custom-commands/
weight: 4000
---

# Custom Commands <a id="custom-commands"></a>

## Creating/Updating a Custom Command<a id="creating-command"></a>

To add/update a command use the `$.sceditor.command.set()` function.

<span class="Label Label--warning">Warning:</span> This function will update any existing command with the same name.

The `$.sceditor.command.set()` function takes two arguments, `name` and `cmd`.

* **name** *String*  
  The name of the command, used to include it in the toolbar. Must be lower-case!
* **cmd** *Object*  
  The command object. See below for more details of this.

```js
$.sceditor.command.set('commandname', {
	exec: function() {
		// this is set to the editor instance
		this.insert('a');
	},
	txtExec: function() {
		// this is set to the editor instance
		this.insert('a');
	},
	tooltip: 'Insert the letter a'
});
```

To add an icon to the command use the the following CSS:

```css
.sceditor-button-[name] div { background: url('/images/icon.png'); }
```

where `[name]` is the name used with `$.sceditor.command.set()`. See [Theming](/documentation/theming/) for more information.

Once you've created a command you can add it to the editor toolbar via the [toolbar option](/documentation/options/#toolbar).


## Structure of a command object: <a id="command-structure"></a>

```js
{
	exec: undefined,
	errorMessage: undefined,
	txtExec: undefined,
	tooltip: undefined
}
```


## exec <a id="exec"></a>

**exec** *String or function*

Executed whenever the command is click in WYSIWYG mode.

Should be either a string which will be passed to the browsers native `execCommand()` function.

Or a function that takes 1 argument, `caller`. The functions `this` will be set to the editors instance.

* **caller** *HTMLElement*  
  The commands HTML button element or null.

**Example**

```js
exec: function () {
	this.insert('[b]Hello World[/b]');
}
```

```js
// Bold will be passed to the native execCommand
exec: 'bold'
```


## errorMessage <a id="errorMessage"></a>

**errorMessage** *String*

Error message to show if the `exec` fails when calling the browsers native `execCommand()`. Only applies if `exec` is a string.


## shortcut <a id="shortcut"></a>

## state <a id="state"></a>

**state** *String or function*

If `state` is a string, it will be passed to the native `queryCommandEnabled`
and `queryCommandState` methods to get the state.

If `state` is a function if will be passed the parent node and the firstBlock
parent node as arguments. It should return `-1`, `0` or `1` where:

- `-1` is disabled (can't be pressed)
- `0` is inactive (default state, can be pressed)
- `1` is active (shows as pressed)


## txtExec <a id="txtExec"></a>

**txtExec** *String or array*

Should be either an array containing 1-2 strings or a function.

If set to an array and has two strings, then any selected content will be surrounded with both strings and the cursor placed before the last one. If the array has only 1 string and there is any selected content, the selected content will be replaced and the cursor placed after the inserted string.

If `txtExec` is a function it should take 1 argument, `caller`. The functions `this` will be set to the editor.

* **caller** *HTMLElement*  #
  The commands HTML button element or null.

**Example**

```js
txtExec: function () {
	this.insert('[b]Hello World[/b]');
}
```

```js
txtExec: ['[b]', '[/b]']
```


## tooltip <a id="tooltip"></a>

**tooltip** *String*

The tooltip to show when the users mouse hovers over the command.

