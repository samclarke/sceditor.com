---
layout: doc
title: Custom Commands
permalink: /documentation/custom-plugins/
categories:
    - Docs
---

## Adding Custom Plugins <a id="custom-plugins"></a>


### Creating a Plugin <a id="creating"></a>

Plugins *must* be created in the `$.sceditor.plugins.*` namespace.

For example to create a plugin called `myplugin` it would be:

<pre class="prettyprint linenums">
// Created in $.sceditor.plugins.[name] namespace
$.sceditor.plugins.myplugin = function() {
	// Store the value of this
	var base = this;

	// Place signal handlers and functions here
};
</pre>

The to add the plugin to the editor just add `myplugin` to the [plugins option](/documentation/options/#plugins) when creating the editor.


### Handling Signals <a id="handling-signals"></a>

To create a signal handler, just create a function with the name of the signal and it will automatically be called whenever that signal is raised.

e.g.

<pre class="prettyprint linenums">
$.sceditor.plugins.myplugin = function() {
	var base = this;

	base.signalKeydownEvent = function(e) {
		// this will automatically be called when 'myplugin'
		// is registered with an editor instance and there
		// is a keydown event
	};
};
</pre>

All signals will have `this` set to the editor instance that the plugin applies to.


### init <a id="init"></a>

Called when the plugin is registered to the editor.


### destroy <a id="destroy"></a>

Called when `destory()` is called on the editor or the plugin is removed from the editor.

This signal should be used to unbind any DOM events and to do any clean up so that any memory used can be freed by the browser.


### signalReady <a id="signalReady"></a>

Called after the editor is created.

<span class="label label-important">Important:</span> This can be called before the page fully loaded.


### signalKeydownEvent <a id="signalKeydownEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keydown` event object

Called whenever the `keydown` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalKeyupEvent <a id="signalKeyupEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keyup` event object

Called whenever the `keyup` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalKeypressEvent <a id="signalKeypressEvent"></a>

**Parameters:**

 * **e** *event*  
   The `keypress` event object

Called whenever the `keypress` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalFocusEvent <a id="signalFocusEvent"></a>

**Parameters:**

 * **e** *event*  
   The `focus` event object

Called whenever the `focus` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalBlurEvent <a id="signalBlurEvent"></a>

**Parameters:**

 * **e** *event*  
   The `blur` event object

Called whenever the `blur` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalContextmenuEvent <a id="signalContextmenuEvent"></a>

**Parameters:**

 * **e** *event*  
   The `contextmenu` event object

Called whenever the `contextmenu` event is triggered in either the WYSIWYG or Source Mode editors.

Use `this.sourceMode()` to check which mode the editor is in.


### signalSelectionchangedEvent <a id="signalSelectionchangedEvent"></a>

**Parameters:**

 * **e** *event*  
   The `selectionchanged` event object

Called whenever the selection has changed in the WYSIWYG editor.

<span class="label label-important">Important:</span> This signal does not occur when in source mode.


### signalToSource <a id="signalToSource"></a>

**Parameters:**

 * **html** *string*  
   A string containing the HTML content of the WYSIWYG editor
 * **body** *jQuery element*  
   The `body` element wrapped in a jQuery object.

<span class="label label-important">Important:</span> Only the first plugin to handle this signal will be called, all other plugins will be ignored.

This should return the source string to be used when in source mode or returned when `val()` is called.

For example the BBCode plugin returns the source BBCode string when this is called.


### signalToWysiwyg <a id="signalToWysiwyg"></a>

**Parameters:**

 * **sourceStr** *string*  
   A string contianing the source code to be converted ready to be displayed in the WYSIWYG editor.
 * **asFragment** *bool*  
   If this is a fragment. Currently only used by the paste event.

<span class="label label-important">Important:</span> Only the first plugin to handle this signal will be called, all other plugins will be ignored.

This should return a HTML string ready to be used with the WYSIWYG editor.

