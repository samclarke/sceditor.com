---
title: Emojis
excerpt: Adds toolbar dropdown to insert unicode emoticons.
---
# Plaintext plugin <a id="emojis"></a>

Toolbar dropdown for inserting [unicode emoticons](https://unicode.org/emoji/charts/full-emoji-list.html).


## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `emojis` to the `plugins` option, and the emoticons you want to use to the `emojis` option. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'emojis',
    emojis: ['😊', '❤️', '😄'],
	style: 'minified/themes/content/default.min.css'
});
</script>
```

That's it, now you can access the dropdown from the toolbar or via the shortcut `ctrl+e`.

## EmojiMart

If you dont want to specify each emoticons you can use the [EmojiMArt Picker](https://missiveapp.com/open/emoji-mart)

For example:

```html
<script>
sceditor.create(textarea, {
    plugins: 'emojis',
	style: 'minified/themes/content/default.min.css'
});
</script>
```

```html
<!-- Include emojimart script -->
<script src="https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/browser.js"></script>
```