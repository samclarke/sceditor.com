---
title: Custom Formats
slug: custom-formats
weight: 5500
---

## Structure

Formats can the following methods:

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

If a method is missing it just won't be called, no error will occur.
