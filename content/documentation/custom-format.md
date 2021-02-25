---
title: Custom Formats
slug: custom-formats
weight: 5500
---

# Custom Formats <a id="custom-formats"></a>


## Structure <a id="structure"></a>

SCEditor currently supports BBCode and XHTML formats as well as custom formats.

<span class="Label Label--important">Important:</span> When creating a custom
format, it must be done before creating an instance of the editor, 
e.g. before calling `sceditor.create()`.

The structure of a custom format should be:

```js
sceditor.formats['youformatname'] = function () {
    /**
     * Called when the editor is created.
     *
     * This is called before the editor is fully initialised 
     */
    this.init = function () {
        // this is set to the editor
    };

    /**
     * Called when the WYSIWYG editor document is ready
     */
    this.onReady = function () {
        // this is set to the editor
    };

    /**
     * Called to convert the whole HTML document to this format
     */
    this.toSource = function (html, context) {
        // this is set to this object
    };

    /**
     * Called to convert the whole source into HTML
     */
    this.toHtml = function (source) {
        // this is set to this object
    };

    /**
     * Called to convert a fragment HTML into this format
     *
     * Parent is set to the current node
     */
    this.fragmentToSource = function (html, context, parent) {
        // this is set to this object
    };

    /**
     * Called to convert a fragment of source into HTML
     */
    this.fragmentToHtml = function (source) {
        // this is set to this object
    };
};
```

If a method is missing no error will occur, it just won't be called.
