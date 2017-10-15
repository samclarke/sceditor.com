---
title: Custom Plugins
slug: custom-plugins
weight: 6000
---

# Custom Plugins <a id="custom-plugins"></a>


## Creating a Plugin <a id="creating"></a>

Plugins *must* be added as a property of the `sceditor.plugins.*` object.

For example to create a plugin called `myplugin` it would be:

```js
// Created in sceditor.plugins.[name] object
sceditor.plugins.myplugin = function() {
	// Place signal handlers and functions here
};
```

To then enable the plugin in the editor, add `myplugin` to the [plugins option](/documentation/options/#plugins) when creating the editor.


## Handling Signals <a id="handling-signals"></a>

To create a signal handler, just create a function with the name of the signal and it will automatically be called whenever that signal is raised.

e.g.

```js
sceditor.plugins.myplugin = function() {
	base.signalKeydownEvent = function(e) {
		// this will automatically be called when 'myplugin'
		// is registered with an editor instance and there
		// is a keydown event
	};
};
```

All signals will have `this` set to the editor instance that the plugin applies to.


## init <a id="init"></a>

Called when the plugin is registered to the editor.


## destroy <a id="destroy"></a>

Called when `destroy()` is called on the editor or the plugin is removed from the editor.

This signal should be used to unbind any DOM events and to do any clean up so that any memory used can be freed by the browser.


## signalReady <a id="signalReady"></a>

Called after the editor is created.

<span class="Label Label--important">Important:</span> This can be called before the page fully loaded.


## signalKeydownEvent <a id="signalKeydownEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keydown` event object

Called whenever the `keydown` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalKeyupEvent <a id="signalKeyupEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keyup` event object

Called whenever the `keyup` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalKeypressEvent <a id="signalKeypressEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keypress` event object

Called whenever the `keypress` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalFocusEvent <a id="signalFocusEvent"></a>

**Parameters:**

 * **e** *event*  
   The `focus` event object

Called whenever the `focus` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalBlurEvent <a id="signalBlurEvent"></a>

**Parameters:**

 * **e** *event*  
   The `blur` event object

Called whenever the `blur` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalContextmenuEvent <a id="signalContextmenuEvent"></a>

**Parameters:**

 * **e** *event*  
   The `contextmenu` event object

Called whenever the `contextmenu` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


## signalSelectionchangedEvent <a id="signalSelectionchangedEvent"></a>

**Parameters:**

 * **e** *event*  
   The `selectionchanged` event object

Called whenever the selection has changed in the WYSIWYG editor.

<span class="Label Label--important">Important:</span> This event does not occur when in source mode.
