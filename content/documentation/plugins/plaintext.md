---
title: Plaintext
excerpt: Adds option to remove formatting when pasting.
---
# Plaintext plugin <a id="plaintext"></a>

Removes all formatting when pasting content in the editor.


## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `plaintext` to the `plugins` option. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'plaintext',
	style: 'minified/themes/content/default.min.css'
});
</script>
```

That's it, now all pasting into the editor will be via plain text.

## Toggle plaintext

Setting the `pastetext.addButton` to true changes the behaviour of this plugin
by allowing plaintext pasting to be toggled on and off via the default plaintext
command.

For example:

```html
<script>
sceditor.create(textarea, {
    plugins: 'plaintext',
    pastetext: {
        addButton: true,
        enabled: false // Set to true to start in enabled state
    },
	style: 'minified/themes/content/default.min.css'
});
</script>
```
