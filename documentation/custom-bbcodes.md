---
layout: doc
title: Custom BBCodes
permalink: /custom-bbcodes/
categories:
    - Docs
sections:
    - url: '#custom-bbcodes'
      title: Custom BBCodes
    - url: '#adding'
      title: Create/Update
    - url: '#bbcode-structure'
      title: BBCode Structure
    - url: '#styles'
      title: Styles
    - url: '#tags'
      title: Tags
    - url: '#isSelfClosing'
      title: IsSelfClosing
    - url: '#isInline'
      title: IsInline
    - url: '#isHtmlInline'
      title: IsHtmlInline
    - url: '#allowedChildren'
      title: AllowedChildren
    - url: '#allowsEmpty'
      title: AllowsEmpty
    - url: '#excludeClosing'
      title: ExcludeClosing
    - url: '#skipLastLineBreak'
      title: SkipLastLineBreak
    - url: '#breakBefore'
      title: BreakBefore
    - url: '#breakStart'
      title: BreakStart
    - url: '#breakEnd'
      title: BreakEnd
    - url: '#breakAfter'
      title: BreakAfter
    - url: '#format'
      title: Format
    - url: '#html'
      title: Html
---

## Adding Custom BBCodes <a id="custom-bbcodes"></a>


### Creating/Updating a BBCode <a id="adding"></a>

To add a new BBCode, use the `$.sceditor.plugins.bbcode.bbcode.set()` function.

<span class="label label-warning">Warning:</span> This function will update any existing BBCode with the same name.

`$.sceditor.plugins.bbcode.bbcode.set()` takes two arguments, `name` and `bbcode`.

* **name** *String*  
  Should be the name of the BBCode e.g. for `[b]` it would be `"b"`. This value *must* be lower-case!
* **bbcode** *Object*  
  The BBCode object. See below for more information

<span class="label label-info">Note:</span> The function `$.sceditorBBCodePlugin.bbcode.set()` is now deprecated in favour of `$.sceditor.plugins.bbcode.bbcode.set()`.


### Structure of a BBCode object <a id="bbcode-structure"></a>

<pre class="prettyprint linenums">
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
    html: 'string|function'
}
</pre>


### styles <a id="styles"></a>

**styles** *object* Defaults to `null`

All matching tags will be passed to the `format` function or string to be converted into BBCode.

To match all occurrences of a CSS style do with a specific value do:

<pre class="prettyprint linenums">
"style-name": ["value1", "value2"]
</pre>

Any DOM node that has the style `style-name` with the value `value1` or `value2` will be matched and passed to the `format` property to be converted.

To match all occurrences of a style regardless of value do:

<pre class="prettyprint linenums">
"style-name": null
</pre>

The `null` value means that the value of the CSS property doesn't matter all that matters is the node has the property `style-name`.


### tags <a id="tags"></a>

**tags** *object* Defaults to `null`

All matching tags will be passed to the `format` function or string to be converted into BBCode.

To match all occurrences of a specific tag do:

<pre class="prettyprint linenums">
"tag-name": null
</pre>

Any DOM node that is an instance of `<tag-name>` will be passed to the `format` property to be converted.

To match all occurrences of a tag with that has a specific attribute do:

<pre class="prettyprint linenums">
"tag-name": {
    "attribute-name": null,
    "another-attribute-name": null
}
</pre>

That will match any tag that is an instance of `<tag-name>` and has the attribute `attribute-name` or `another-attribute-name`.

To match all occurrences of a tag with an attribute with a specific value do:

<pre class="prettyprint linenums">
"tag-name": {
    "attribute-name": ["value1", "value2"]
}
</pre>

This will match any tag that is an instance of `<tag-name>` and has the attribute `attribute-name` with the value `value1` or `value2`.


### isSelfClosing <a id="isSelfClosing"></a>

**isSelfClosing** *Bool* Defaults to `false`

If this BBCode is a self closing tag (has no closing tag i.e. `[hr]`).


### isInline <a id="isInline"></a>

**isInline** *Bool* Defaults to `true`

If this BBCode is an inline or block level BBCode.


### isHtmlInline <a id="isHtmlInline"></a>

**isHtmlInline** *Bool or undefined* Defaults to `undefined`

If this output HTML for this BBCode is inline or not. Only needs to be set if it differs from the BBCodes `isInline` value. If undefined this is ignored and `isInline` is used.


### allowedChildren <a id="allowedChildren"></a>

**allowedChildren** *Array or null* Defaults to `null`

If null/undefined then all children will be allowed. If it's an array only the tags specified will be allowed. To allow plain text use `#` as the tag name.

To only allow plain text:
`allowedChildren: [#]`

To only allow bold and italic as children:
`allowedChildren: ['b', 'i']`


### allowsEmpty <a id="allowsEmpty"></a>

**allowsEmpty** *Bool* Defaults to `false`

If this tag is allowed to be empty (have no children or content).


### excludeClosing <a id="excludeClosing"></a>

**excludeClosing** *Bool* Defaults to `false`

If to not add a closing tag. Mostly so that `[*]` can be used without `[/*]`.


### skipLastLineBreak <a id="skipLastLineBreak"></a>

**skipLastLineBreak** *Bool* Defaults to `false`

Block level tags have an extra `<br />` added to the end of them in all browsers except IE. If this is set to true the extra line break will not be added.


### breakBefore <a id="breakBefore"></a>

**breakBefore** *Bool* Defaults to `false`

If to insert a new line before the start tag.


### breakStart <a id="breakStart"></a>

**breakStart** *Bool* Defaults to `false`

If to insert a new line after the start tag.

<span class="label label-info">Note:</span> This does not apply to self closing tags.


### breakEnd <a id="breakEnd"></a>

**breakEnd** *Bool* Defaults to `false`

If to insert a new line before the end tag.

<span class="label label-info">Note:</span> This does not apply to self closing tags.


### breakAfter <a id="breakAfter"></a>
**breakAfter** *Bool* Defaults to `false`

If to insert a new line after the end tag.


### format <a id="format"></a>

**format** *String or function*

Should be either a string in the format `"[b]{0}[/b]"` where `{0}` will be replaced with the BBCode tags content.

Or a function that takes two arguments, `element` &amp; `content` and returns the formatted BBCode string.

* **element** *HTMLElement*  
  The DOM HTMLElement object to be converted
* **content** *String*  
  A string containing the BBCodes content

e.g.:

<pre class="prettyprint linenums">
function(element, content) {
    if(!element.attr('data-youtube-id'))
        return content;

    return '[youtube]' + element.attr('data-youtube-id') + '[/youtube]';
}
</pre>


### html <a id="html"></a>

**html** *String or function*

Should be either a string in the format `"<strong>{0}</strong>"` where `{0}` will be replaced with the HTML tags content.

Or a function that takes 3 arguments (token, attrs, content) and returns the HTML string.

* **token** *Object*  
  TokenizeToken object
* **attrs** *Object*  
  Map of attributes. The default attribute `[tag=default]` will be set to `defaultAttr`
* **content** *String*  
  The HTML content of this tag

e.g.:

<pre class="prettyprint linenums">
html: function(token, attrs, content) {
    if(typeof attrs.defaultAttr !== "undefined")
        content = '&lt;cite&gt;' + attrs.defaultAttr + '&lt;/cite&gt;' + content;

    return '&lt;blockquote&gt;' + content + '&lt;/blockquote&gt;';
}
</pre>
