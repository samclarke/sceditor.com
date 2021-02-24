---
title: Options
permalink: /documentation/options/
weight: 2000
---

# Options

## Specifying options <a id="specifying"></a>

All options should be passed via the constructor.

For example.

```js
// Create the editor
sceditor.create(textarea, {
	// Options go here

    plugins: 'undo',
    format: 'bbcode',
	toolbar: 'bold,italic,underline|source',
	locale: 'no-NB'
});
```


## toolbar <a id="toolbar"></a>

**toolbar** *String* Defaults to a list of all the built in commands

A comma separated list of commands. To separate commands into groups, use the bar character (&#124;) instead of a comma. e.g.: `"bold,italic,underline|source"`

The default commands bundled with the editor are:

 * **bold**
 * **italic**
 * **underline**
 * **strike**
 * **subscript**
 * **superscript**
 * **left**
 * **center**
 * **right**
 * **justify**
 * **font**
 * **size**
 * **color**
 * **removeformat**
 * **cut**  
 * **copy**  
 * **paste**  
 * **pastetext**
 * **bulletlist**
 * **orderedlist**
 * **table**
 * **code**
 * **quote**
 * **horizontalrule**
 * **image**
 * **email**
 * **link**
 * **unlink**
 * **emoticon**
 * **youtube**
 * **date**
 * **time**
 * **ltr**
 * **rtl**
 * **print**
 * **maximize**
 * **source**


## toolbarExclude <a id="toolbarexclude"></a>

**toolbarExclude** *String* Defaults to `null`

Comma separated list of commands to exclude from the toolbar. Leave as `null` to not exclude any.


## style <a id="style"></a>

**style** *String*

URL of the stylesheet to used to style the <abbr title="What You See Is What You Get">WYSIWYG</abbr> editors content.


## fonts <a id="fonts"></a>

**fonts** *String* Defaults to `"Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana"`

A comma separated list of fonts to use with the font selector.


## colors <a id="colors"></a>

**colors** *String* Defaults to `null`

Should be comma separated list of hex colours with bar (&#124;) characters to signal a new columns. If set to `null` the colors will be auto generated.

For example:

```js
colors: '#ffff00,#ff00ff,#00ffff|#ff0000,#00ff00,#0000ff',
```

Would produce:

<div style="overflow: hidden">
    <div class="sceditor-color-column" style="float: left;">
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #ffff00" data-color="#ffff00"></span>
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #ff00ff" data-color="#ff00ff"></span>
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #00ffff" data-color="#00ffff"></span>
    </div>
    <div class="sceditor-color-column" style="float: left;">
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #ff0000" data-color="#ff000"></span>
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #00ff00" data-color="#00ff00"></span>
        <span class="sceditor-color-option" style="display: block; border: 1px solid #fff; height: 1em; width: 1em; overflow: hidden; background-color: #0000ff" data-color="#0000ff"></span>
    </div>
</div>


## locale <a id="locale"></a>

**locale** *String* Defaults to `"en"`

The locale to use, e.g.: `en`, `en-US`, `fr`, etc.

<span class="Label Label--important">Important</span> The language file must be included after the editors main JS file but before the editor is created. e.g.

```html
<script src="../minified/jquery.sceditor.min.js"></script>
<script src="../languages/nl.js"></script>

<!-- Create the editor after including the translation -->
<script>
sceditor.create(
    ...
);
</script>
```


## charset <a id="charset"></a>

**charset** *String* Defaults to `"utf-8"`

The charset to use for the <abbr title="What You See Is What You Get">WYSIWYG</abbr> content.


## startInSourceMode <a id="startInSourceMode"></a>

**startInSourceMode** *Bool* Defaults to `false`

If to start the editor in source mode. Set to `true` to start in source mode.


## emoticonsEnabled <a id="emoticonsEnabled"></a>

**emoticonsEnabled** *Bool* Defaults to `true`

If emoticons should be enabled. Set to `false` to disable emoticons.


## emoticonsCompat <a id="emoticonsCompat"></a>

**emoticonsCompat** *Bool* Defaults to `false`

Enables or disables emoticons compatibility mode.

When this is enabled, emoticons must be surrounded by whitespace or <abbr title="End Of Line">EOL</abbr> characters. For example, if you have an emoticon with the code `:/`, in compatibility mode it will not replace the `:/` in `http://`.


## emoticonsRoot <a id="emoticonsRoot"></a>

**emoticonsRoot** *String* Defaults to an empty string

Root URL of all emoticons. This string will be prepended to all emoticon URLs.


## emoticons <a id="emoticons"></a>

**emoticons** *Object*

Object in the following format:

```js
{
    // Emoticons to be included in the dropdown
    dropdown: {
        ':)': 'emoticons/smile.png',
        ':angel:': 'emoticons/angel.png'
    },
    // Emoticons to be included in the more section
    more: {
        ':alien:': 'emoticons/alien.png',
        ':blink:': 'emoticons/blink.png'
    },
    // Emoticons that are not shown in the dropdown but will still
    // be converted. Can be used for things like aliases
    hidden: {
        ':aliasforalien:': 'emoticons/alien.png',
        ':aliasforblink:': 'emoticons/blink.png'
    }
}
```


## icons <a id="icons"></a>

**icons** *String* Defaults to `null`

Icon set to use with the editor. If this is null no icon set will be used and icons will be loaded from the current theme instead.

The bundled icon sets are [monocons](https://github.com/samclarke/monocons) (use `monocons` as the option value) and [material design icons](https://materialdesignicons.com/) (use `material` as the option value).


## width <a id="width"></a>

**width** *String or int* Defaults to `null`

Initial width of the editor. Can be either an int which will be treated as the px value or a string percentage. e.g. `"100%"`.

If set to null the width will be set to the width of the textarea it is replacing.


## height <a id="height"></a>

**height** *String or int* Defaults to `null`

Initial height of the editor. Can be either an int which will be treated as the px value or a string percentage. e.g. `"100%"`.

If set to null the height will be set to the height of the textarea it is replacing.


## resizeEnabled <a id="resizeEnabled"></a>

**resizeEnabled** *Bool* Defaults to `true`

If to allow the editor to be resized. If set to true, a small grip will be added to the bottom right-hand corner (bottom left-hand corner in LTR mode) of the editor which allows it to be resized.


## resizeMinWidth <a id="resizeMinWidth"></a>

**resizeEnabled** *int* Defaults to `null`

Minimum width that the editor can be resized to. Set to null for half textarea width or -1 for unlimited.


## resizeMinHeight <a id="resizeMinHeight"></a>

**resizeMinHeight** *int* Defaults to `null`

Minimum height that the editor can be resized. Set to null for half textarea height or -1 for unlimited


## resizeMaxHeight <a id="resizeMaxHeight"></a>

**resizeMaxHeight** *int* Defaults to `null`

Maximum height the editor can be resized to. Set to null for double textarea height or -1 for unlimited


## resizeMaxWidth <a id="resizeMaxWidth"></a>

**resizeMaxWidth** *int* Defaults to `null`

Maximum width the editor can be resized to. Set to null for double textarea width or -1 for unlimited


## resizeHeight <a id="resizeHeight"></a>

**resizeHeight** *bool* Defaults to `true`

If to enable resizing the editors height.


## resizeWidth <a id="resizeHeight"></a>

**resizeWidth** *bool* Defaults to `true`

If to enable resizing the editors width.


## dateFormat <a id="dateFormat"></a>

**dateFormat** *String* Defaults to `"year-month-day"`

Date format to used by the date command. This option will be overridden if the current locale specifies a date format.

The words year, month and day will be replaced with the users current year, month and day.


## toolbarContainer <a id="toolbarContainer"></a>

**toolbarContainer** *HTMLElement* Defaults to `null`

HTML node that to contain the toolbar into. Defaults to adding the toolbar above the iframe.


## enablePasteFiltering <a id="enablePasteFiltering"></a>

**enablePasteFiltering** *bool* Defaults to `false`

If to enable paste filtering. When text is pasted it will be filtered through any plugins.

With the BBCode plugin this will cause any HTML without a valid BBCode to be stripped.


## readOnly <a id="readOnly"></a>

**readOnly** *bool* Defaults to `false`

If the editor is read only.


## rtl <a id="rtl"></a>

**rtl** *bool* Defaults to `false`

If to set the editor to right-to-left mode.

This can be changed at runtime with the `rtl(bool)` method.


## autofocus <a id="autofocus"></a>

**autofocus** *bool* Defaults to `false`

If to auto focus the editor on page load.


## autofocusEnd <a id="autofocusEnd"></a>

**autofocusEnd** *bool* Defaults to `true`

If the cursor should be placed at the end when auto focusing or at the beginning.


## autoExpand <a id="autoExpand"></a>

**autoExpand** *bool* Defaults to `false`

If to auto expand the editor to fit the content


## autoUpdate <a id="autoUpdate"></a>

**autoUpdate** *bool* Defaults to `false`

If true, the original textbox will be updated with the editors current value when the editor loses focus.


## runWithoutWysiwygSupport <a id="runWithoutWysiwygSupport"></a>

**runWithoutWysiwygSupport** *bool* Defaults to `false`

If to run the source editor when there is no browser <abbr title="What You See Is What You Get">WYSIWYG</abbr> support. Only really applies to mobile OS's as all modern desktop browsers support <abbr title="What You See Is What You Get">WYSIWYG</abbr> editing.


## id <a id="id"></a>

**id** *String* Defaults to `null`

ID to assign the editor.


## plugins <a id="plugins"></a>

**plugins** *String* Defaults to an empty string

A commas separated list of plugins. e.g. `"plugin1,plugin2"`

See plugins documentation for list of default plugins.


## spellcheck <a id="spellcheck"></a>

**spellcheck** *Boolean* Defaults to `true`

If to enable the browsers built in spell checker. This option is only really useful if you want to disabled the browsers built in spellchecker.



## disableBlockRemove <a id="disableBlockRemove"></a>

**disableBlockRemove** *Boolean* Defaults to `false`

By default the editor will remove block level elements when the cursor is placed at the start of them and backspace is pressed. This option allows that behaviour to be disabled.


## parserOptions <a id="parserOptions"></a>

**parserOptions** *Object* Defaults to an empty object

If to trim the whitespace from the start and end of BBCode. By default the whitespace will be left.


## bbcodeTrim <a id="bbcodeTrim"></a>

**bbcodeTrim** *Boolean* Defaults to `false`

<span class="Label Label--important">Important</span> This only applies if using
the editor in BBCode mode.

Trims white space from the start and end of editors value.

This does not affect the contents of BBCode tags or white space between them,
only white space at the start and end of the editors value.

So for example:

```

[b]  example  [/b]

[b]  example  [/b]

```

will become:

```
[b]  example  [/b]

[b]  example  [/b]
```


## dropDownCss <a id="dropDownCss"></a>

**dropDownCss** *Object* Defaults to an empty object

Extra CSS to add to the dropdown menu (e.g. z-index).
