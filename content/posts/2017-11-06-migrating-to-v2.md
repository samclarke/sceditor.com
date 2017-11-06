---
title: Migrating to V2
slug: migrating-to-v2
excerpt: How to migrate from 1.x to 2.x
date: 2017-11-06
---

There have been a number of backwards incompatible changes in this release which
had to be done to fix some bugs and remove the jQuery dependency.


## Themes

In order to fix some issues around re-sizing and resizing the editor in a hidden
parent, the theme has been updated to use `flex-box`.
Old themes will need to be updated to the new CSS and HTML in order to work.

Support for IE < 10 has been dropped so themes can use more modern CSS now.

The editor now supports SVG icons sets. The default bundled sets are monocons
and material design icons. Themes will need to be updated to handle them.

Finally `jquery.sceditor.default.css` has been moved to `themes/content/default.css` and `jquery.sceditor.default.min.css` has been moved to `themes/content/default.min.css`.


## BBCode and XHTML plugins

The BBCode and XHTML plugins have now been moved to `formats`.

They work the same as before except to initialise them, you need to specify the
`format` option when creating the editor instead of adding them to the `plugins`
option.

For example:

```js
const textarea = ...

sceditor.create(textarea, {
    format: 'bbcode'
});
```

To access the formats use the `formats` property on the sceditor object:

```js
sceditor.formats.bbcode.add('custom-bbcode', {
    ...
});
```

## Events

The `nodechanged` event now stores the old and new nodes in the `detail` property
of the event. For example:

```js
function nodechangedHandler(e) {
    var oldNode = e.detail.oldNode;
    var newNode = e.detail.newNode;
}
```

The `valuechanged` now stores the raw value `detail` property of the event.
For example:

```js
function valuechangedHandler(e) {
    var rawValue = e.detail.rawValue;
    var newNode = e.detail.newNode;
}
```

## Methods and variables

The `getContentAreaContainer` and `getBody` methods now return plain DOM
elements instead of jQuery objects and the `dom.parseHTML` function now returns
a DOM fragment.

Calling the jQuery `testarea.data('sceditor')` method no longer returns the
SCEditor instance, instead use `sceditor.instance(testarea)`.

The deprecated `jQuery.fn.sceditorBBCodePlugin()` method has been removed as has
the deprecated `$.sceditorBBCodePlugin` variable.

The `updateStyleCache` method has been removed from the editor.

### BBCode and XHTML methods and variables

The BBCode `elementToBbcode()` method now takes a DOM node instead of a jQuery
object and the element passed to the BBCode `format:` function is now a plain
DOM node. 

The second argument to the XHTML `conv` function is no longer supplied, only the
plain DOM node.

## Commands

The `forceNewLineAfter` property has been removed from the commands object.
It is now handled automatically.


The `caller` argument to the `exec` and `txtExec` methods is now a
HTMLDivElement and not a jQuery object.

## Plugins

The `signalToWysiwyg` and `signalToSource` methods have been removed.
Plugins that used them should be migrated to formats instead.
