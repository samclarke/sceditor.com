---
title: AutoYoutube
excerpt: Automatically converts pasted YouTube links into video embeds.
---

# AutoYoutube plugin <a id="autoyoutube"></a>

Automatically converts YouTube links pasted into the editor into video embeds.

## Initialise <a id="initialise"></a>

To enable the plaintext plugin add `autoyoutube` to the `plugins` option. e.g.

```html
<script>
sceditor.create(textarea, {
	plugins: 'autoyoutube',
    style: 'minified/themes/content/default.min.css'
});
</script>
```

That's it! Now whenever a YouTube link is pasted it will be converted to an
embed instead.
