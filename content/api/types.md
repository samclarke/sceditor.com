---
title: Types
permalink: /api/types/
categories:
    - Docs
    - API
---

### <a id="sceditor" href="#sceditor">SCEditor</a>

An instance of SCEditor. See the [SCEditor API page](/api/sceditor/) for a full list of methods.


### <a id="string" href="#string">string</a>

A JavaScript string primitive (not String object).

```js
typeof value === 'string' // Will be true
```


### <a id="function" href="#function">function</a>

A JavaScript function.

```js
typeof value === 'function' // Will be true
```


### <a id="bool" href="#bool">boolean</a>

A JS boolean primitive (not a Boolean object).

```js
typeof value === 'boolean' // Will be true
```

### <a id="number" href="#number">number</a>

A JS number primitive (not a Number object).

```js
typeof value === 'number' // Will be true
```

### <a id="int" href="#int">int</a>

A JS number primitive (not a Number object) that is an integer
(..., -2, -1, 0, 1, 2, ...).

```js
typeof value === 'number' // Will be true
```

### <a id="array" href="#array">array</a>

A JavaScript array. For example:

```js
var empty = [];
var array = ['one', 'two', 'three'];
```

See the [MDN array page](https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Array) for more informatiom.


### <a id="node" href="#node">Node</a>

A DOM node object. For more information see the [MDN node page](https://developer.mozilla.org/en/docs/DOM/node).


### <a id="htmlelement" href="#htmlelement">HTMLElement</a>

A DOM HTMLElement object. For more information see the [MDN element page](https://developer.mozilla.org/en/docs/DOM/element).


### <a id="range" href="#range">Range</a>

A DOM range object. For more information see the [MDN range page](https://developer.mozilla.org/en/docs/DOM/range).


### <a id="jquery" href="#jquery">jQuery</a>

A jQuery object. For more information see the [jQuery docs](http://api.jquery.com/jQuery/).
