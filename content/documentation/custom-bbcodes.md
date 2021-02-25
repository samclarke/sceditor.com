---
title: Custom BBCodes
slug: custom-bbcodes
weight: 5000
---

# Custom BBCodes <a id="custom-bbcodes"></a>


## Creating/Updating a BBCode <a id="adding"></a>

To add a new BBCode, use the `sceditor.formats.bbcode.set()` function.

<span class="Label Label--important">Important:</span> When creating or updating
a BBCode, it must be done before creating an instance of the editor, 
e.g. before calling `sceditor.create()`.

<span class="Label Label--warning">Warning:</span> This function will update any existing BBCode with the same name.

`sceditor.formats.bbcode.set()` takes two arguments, `name` and `bbcode`.

* **name** *String*  
  Should be the name of the BBCode e.g. for `[b]` it would be `"b"`. This value *must* be lower-case!
* **bbcode** *Object*  
  The BBCode object. See below for more information


## Structure of a BBCode object <a id="bbcode-structure"></a>

```js
{
    styles: {
        "stylename": null,
        "another-style-name": ["value1", "value2"]
    }
    tags: {
        "tag": null,
        "another-tag": {
            "attribute1": null,
            "attribute2": ["value1", "value2"]
        }
    }
    isSelfClosing: false,
    isInline: true,
    isHtmlInline: undefined,
    allowedChildren: null,
    allowsEmpty: false,
    excludeClosing: false,
    skipLastLineBreak: false,

    breakBefore: false,
    breakStart: false,
    breakEnd: false,
    breakAfter: false,

    format: 'string|function',
    html: 'string|function',

    quoteType: sceditor.BBCodeParser.QuoteType.auto
}
```

## styles <a id="styles"></a>

**styles** *object* Defaults to `null`

All matching tags will be passed to the `format` function or string to be converted into BBCode.

To match all occurrences of a CSS style do with a specific value do:

```js
"style-name": ["value1", "value2"]
```

Any DOM node that has the style `style-name` with the value `value1` or `value2` will be matched and passed to the `format` property to be converted.

To match all occurrences of a style regardless of value do:

```js
"style-name": null
```

The `null` value means that the value of the CSS property doesn't matter all that matters is the node has the property `style-name`.

<div class="Callout Callout--warning">
	<h3 class="Callout__header">Warning</h3>
	<p>Currently it's not possible to target both styles and tags at the same time
  via the <code>styles</code> and <code>tags</code> properties.</p>
	<p>To target a tags that have specific styles, target the tag using the <code>tags</code> property and then in the format method check if the node has the desired styles. If it does handle it otherwise just return the contents.</p>
  <p>For example:</p>
  <pre class=" language-js"><code class=" language-js">
format: function(element, content) {
    // Only handle tags with the font-weight: bold style
    if(element.style.fontWeight !== 'bold') {
        return content;
    }

    return '[b]' + content + '[/b]';
}
</code></pre>
</div>


## tags <a id="tags"></a>

**tags** *object* Defaults to `null`

All matching tags will be passed to the `format` function or string to be converted into BBCode.

To match all occurrences of a specific tag do:

```js
"tag-name": null
```

Any DOM node that is an instance of `<tag-name>` will be passed to the `format` property to be converted.

To match all occurrences of a tag with that has a specific attribute do:

```js
"tag-name": {
    "attribute-name": null,
    "another-attribute-name": null
}
```

That will match any tag that is an instance of `<tag-name>` and has the attribute `attribute-name` or `another-attribute-name`.

To match all occurrences of a tag with an attribute with a specific value do:

```js
"tag-name": {
    "attribute-name": ["value1", "value2"]
}
```

This will match any tag that is an instance of `<tag-name>` and has the attribute `attribute-name` with the value `value1` or `value2`.


## isSelfClosing <a id="isSelfClosing"></a>

**isSelfClosing** *Bool* Defaults to `false`

If this BBCode is a self closing tag (has no closing tag i.e. `[hr]`).


## isInline <a id="isInline"></a>

**isInline** *Bool* Defaults to `true`

If this BBCode is an inline or block level BBCode.


## isHtmlInline <a id="isHtmlInline"></a>

**isHtmlInline** *Bool or undefined* Defaults to `undefined`

If this output HTML for this BBCode is inline or not. Only needs to be set if it differs from the BBCodes `isInline` value. If undefined this is ignored and `isInline` is used.


## allowedChildren <a id="allowedChildren"></a>

**allowedChildren** *Array or null* Defaults to `null`

If null/undefined then all children will be allowed. If it's an array only the tags specified will be allowed. To allow plain text use `#` as the tag name.

To only allow plain text:
`allowedChildren: ['#']`

To only allow bold and italic as children:
`allowedChildren: ['b', 'i']`


## allowsEmpty <a id="allowsEmpty"></a>

**allowsEmpty** *Bool* Defaults to `false`

If this tag is allowed to be empty (have no children or content).


## excludeClosing <a id="excludeClosing"></a>

**excludeClosing** *Bool* Defaults to `false`

If to not add a closing tag. Mostly so that `[*]` can be used without `[/*]`.


## skipLastLineBreak <a id="skipLastLineBreak"></a>

**skipLastLineBreak** *Bool* Defaults to `false`

Block level tags have an extra `<br />` added to the end of them in all browsers except IE. If this is set to true the extra line break will not be added.


## breakBefore <a id="breakBefore"></a>

**breakBefore** *Bool* Defaults to `false`

If to insert a new line before the start tag.


## breakStart <a id="breakStart"></a>

**breakStart** *Bool* Defaults to `false`

If to insert a new line after the start tag.

<span class="Label Label--info">Note:</span> This does not apply to self closing tags.


## breakEnd <a id="breakEnd"></a>

**breakEnd** *Bool* Defaults to `false`

If to insert a new line before the end tag.

<span class="Label Label--info">Note:</span> This does not apply to self closing tags.


## breakAfter <a id="breakAfter"></a>
**breakAfter** *Bool* Defaults to `false`

If to insert a new line after the end tag.


## format <a id="format"></a>

**format** *String or function*

Should be either a string in the format `"[b]{0}[/b]"` where `{0}` will be replaced with the BBCode tags content.

Or a function that takes two arguments, `element` &amp; `content` and returns the formatted BBCode string.

* **element** *HTMLElement*  
  The DOM HTMLElement object to be converted
* **content** *String*  
  A string containing the BBCodes content

e.g.:

```js
function(element, content) {
    if(!element.attr('data-youtube-id'))
        return content;

    return '[youtube]' + element.attr('data-youtube-id') + '[/youtube]';
}
```


## html <a id="html"></a>

**html** *String or function*

Should be either a string in the format `"<strong>{0}</strong>"` where `{0}` will be replaced with the HTML tags content.

Or a function that takes 3 arguments (token, attrs, content) and returns the HTML string.

* **token** *Object*  
  TokenizeToken object
* **attrs** *Object*  
  Map of attributes. The default attribute `[tag=default]` will be set to `defaultattr`
* **content** *String*  
  The HTML content of this tag

e.g.:

```js
html: function(token, attrs, content) {
    if(typeof attrs.defaultattr !== 'undefined')
        content = '<cite>' + attrs.defaultattr + '</cite>' + content;

    return '<blockquote>' + content + '</blockquote>';
}
```


## quoteType

**quoteType** *sceditor.BBCodeParser.QuoteType* Defaults to `sceditor.BBCodeParser.QuoteType.auto`

The attribute quote type.

Should either be a function or one of the following values:

* **sceditor.BBCodeParser.QuoteType.always**  
  Always quote the attribute value
* **sceditor.BBCodeParser.QuoteType.never**  
  Never quote the attributes value
* **sceditor.BBCodeParser.QuoteType.auto**  
  Only quote the attributes value when it contains spaces ot equals


