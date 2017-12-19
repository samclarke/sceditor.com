---
title: AutoSave
excerpt: Automatically saves the editors contents to localStorage.
---

# AutoSave plugin <a id="autosave"></a>

Automatically saves the editors contents (for 1 day by default) to localStorage.

It will remove auto saved content when a form containing the editor is submitted
or when the method `sceditor.plugins.autosave.clear()` is manually called.
If using custom `storageKey` it will need to be passed as the first argument to
`clear()` if manually clearing the auto saved data.

<div class="Callout Callout--warning">
	<h3 class="Callout__header">Warning!</h3>
	<p>If using multiple instances of the editor on a page, always specify the
    storageKey option or override the load and save handlers.</p>
</div>

## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `autosave` to the `plugins` option. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'autosave',
    style: 'minified/themes/content/default.min.css'
});
</script>
```

That's it! Now the editors contents will be saved for 1 day to localStorage.


## Options

To specify autosave options add a `autosave` property to the options object
with the desired options, e.g.:

```html
<script>
sceditor.create(textarea, {
	plugins: 'dragdrop',
    style: 'minified/themes/content/default.min.css',
    autosave: {
        storageKey: ...,
        saveHandler: function (data) {
            ...
        }
    }
});
</script>
```

The `autosave` plugin supports the following options:

```js
autosave: {
    // The storage key to use for storing the draft in local storage.
    // Key should start with "sce-autodraft-" for the autosave plugin to
    // remove it if it is passed the expires.
    // Defaults to "sce-autodraft-" plus the path and query string:
    storageKey: 'sce-autodraft-' + location.pathname + location.search;,
    // Save handler function, see below for data object
    saveHandler: function (data) {
        ...
    },
    // Load handler function, see below for data object
    loadHandler: function () {
        ...
        return data;
    },
    // Number of milliseconds to keep drafts before clearing when using the
    // default load and save handlers.
    // Defaults to 24 hrs
    expires: 86400000
}
```

The save handler will be called with and the load handler should return the
following object:

```js
{
    // Object - contains the source mode caret position
    caret: {
        // Number - source editor caret start position
        start: Number
        // Number - source editor caret end position
        end: Number
    },
    // Boolean - if in source mode
    sourceMode: Boolean,
    // String - editors contents
    value: String,
    // Number - current timestamp
    time: Number
}
```
