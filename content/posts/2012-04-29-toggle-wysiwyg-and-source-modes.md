---
title: Toggle WYSIWYG and source modes
excerpt: Example of how to programmatically toggle between WYSIWYG and source modes
date: 2012-04-29
slug: toggle-wysiwyg-and-source-modes
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sceditor@latest/minified/themes/default.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/sceditor@latest/minified/sceditor.min.js"> </script>
<script src="https://cdn.jsdelivr.net/npm/sceditor@latest/minified/formats/bbcode.js"> </script>

<p><textarea style="width:600px; height:300px" id="demo-toggle">Simple [b]demo[/b].</textarea></p>
<p><a href="javascript:toggle();">Toggle editor mode</a></p>

<script>
var textarea = document.getElementById('demo-toggle');
sceditor.create(textarea, {
	format: 'bbcode',
	toolbar: 'bold,italic,underline|source',
	style: 'https://cdn.jsdelivr.net/npm/sceditor@latest/minified/themes/content/default.min.css',
	emoticonsRoot: '/'
});

function toggle() {
	var textarea = document.getElementById('demo-toggle');
	sceditor.instance(textarea).toggleSourceMode();
}
</script>

<h2>Code behind</h2>

<h3>Create the editor</h3>

```js
var textarea = document.getElementById('demo-toggle');
sceditor.create(textarea, {
	format: 'bbcode',
	toolbar: 'bold,italic,underline|source',
	style: '/minified/themes/content/default.min.css'
});
```

<h3>Toggle source mode</h3>

<p>Then, to switch between WYSIWYG mode and source mode, simply call the <code>toggleTextMode()</code> method on an editor instance.</p>

```js
var textarea = document.getElementById('demo-toggle');
sceditor.instance(textarea).toggleSourceMode();
```

<p>You can also use <code>sourceMode([boolean] setToSourceMode)</code> to set the editor mode and <code>sourceMode()</code> to get the editor mode.

```js
var textarea = document.getElementById('demo-toggle');
var instance = sceditor.instance(textarea);

// InSourceMode will be true if the editor is in source mdoe, false if not.
var InSourceMode = instance.sourceMode();

// Set the editor to source mode
instance.sourceMode(true);

// Set the editor to WYSIWYG mode
instance.sourceMode(false);
```
