---
title: DragDrop
excerpt: Adds file drag and drop support to SCEditor
---
# DragDrop plugin <a id="dragdrop"></a>

Adds file drag and drop support to SCEditor.
An example of it in use uploading images to imgur is [available here](/posts/drag-drop-upload-demo/).

## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `dragdrop` to the `plugins` option and
specify the dragdrop options. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'dragdrop',
    style: 'minified/themes/content/default.min.css',
    dragdrop: {
        allowedTypes: ...,
        handleFile: function (file, createPlaceholder) {
            ...
        }
    }
});
</script>
```

## Options

The plugin supports the following options:

```js
dragdrop: {
    // Array of allowed mime types or null to allow all
    allowedTypes: ['image/jpeg', 'image/png'],
    // Function to return if a file is allowed or not,
    // defaults to always returning true
    isAllowed: function(file) {
        return true;
    },
    // If to extract pasted files like images pasted as
    // base64 encoded URI's. Defaults to true
    handlePaste: true,
    // Method that handles the files / uploading etc.
    handleFile: function (file, createPlaceholder) {
        // createPlaceholder function will insert a
        // loading placeholder into the editor and
        // return an object with inert(html) and
        // cancel() methods

        // For example:
        var placeholder = createPlaceholder();

        asyncUpload(file).then(function (url) {
            // Replace the placeholder with the image HTML
            placeholder.insert('<img src=\'' + url + '\' />');
        }).catch(function () {
            // Error so remove the placeholder
            placeholder.cancel();
        });
    }
}
```