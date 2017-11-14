---
title: Drag & Drop image upload demo
slug: drag-drop-upload-demo
excerpt: Demo of the drag and drop plugin upload
date: 2017-11-06
---

<p>
<textarea style="height: 400px" id="demo">Demo of the drag and drop plugin.

Drag and drop a .jpeg or .png image over the editor and it will be uploaded to imgur and then inserted.</textarea>
</p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sceditor@2/minified/themes/default.min.css" />
<script src="https://cdn.jsdelivr.net/combine/npm/sceditor@2/minified/sceditor.min.js,npm/sceditor@2/minified/formats/bbcode.js,npm/sceditor@2/minified/icons/monocons.js,npm/sceditor@2/minified/plugins/dragdrop.js,npm/whatwg-fetch@2,npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

<script>
/**
 * Takes a file and uploads it to imgur.
 * 
 * @param {File} file
 * @return {Promise}
 */
function imgurUpload(file) {
	var headers = new Headers({
		'authorization': 'Client-ID 4d4b2e4657feacb'
	});

	var form = new FormData();
	form.append('image', file);

	return fetch('https://api.imgur.com/3/image', {
		method: 'post',
		headers: headers,
		body: form
	}).then(function (response) {
		return response.json();
	}).then(function (result) {
		if (result.success) {
			return result.data.link;
		}

		throw 'Upload error';
	});
}

var dragdropOptions = {
    allowedTypes: ['image/jpeg', 'image/png'],
    handleFile: function (file, createPlaceholder) {
        var placeholder = createPlaceholder();

        imgurUpload(file).then(function (url) {
            // Replace the placeholder with the image HTML
            placeholder.insert('<img src=\'' + url + '\' />');
        }).catch(function () {
            // Error so remove the placeholder
            placeholder.cancel();

            alert('Problem uploading image to imgur.');
        });
    }
};

var textarea = document.getElementById('demo');
sceditor.create(textarea, {
    plugins: 'dragdrop',
	format: 'bbcode',
    icons: 'monocons',
	dragdrop: dragdropOptions,
    autofocus: true,
    emoticonsRoot: '/',
    width: '100%',
	style: 'https://cdn.jsdelivr.net/npm/sceditor@2/minified/themes/content/default.min.css'
});

sceditor.instance(textarea).css('img { max-width: 50%; }');
</script>

## The code

First we need a function to upload the file to imgur:

```js
/**
 * Takes a file and uploads it to imgur.
 * 
 * @param {File} file
 * @return {Promise}
 */
function imgurUpload(file) {
	var headers = new Headers({
		'authorization': 'Client-ID <your imgur client ID>'
	});

	var form = new FormData();
	form.append('image', file);

	return fetch('https://api.imgur.com/3/image', {
		method: 'post',
		headers: headers,
		body: form
	}).then(function (response) {
		return response.json();
	}).then(function (result) {
		if (result.success) {
			return result.data.link;
		}

		throw 'Upload error';
	});
}
```

Then the drag and drop plugin options:

```js
var dragdropOptions = {
    // The allowed mime types that can be dropped on the editor
    allowedTypes: ['image/jpeg', 'image/png'],
    handleFile: function (file, createPlaceholder) {
        var placeholder = createPlaceholder();

        imgurUpload(file).then(function (url) {
            // Replace the placeholder with the image HTML
            placeholder.insert('<img src=\'' + url + '\' />');
        }).catch(function () {
            // Error so remove the placeholder
            placeholder.cancel();

            alert('Problem uploading image to imgur.');
        });
    }
};
```

Finally create the editor with the options:

```js
// Create the SCEditor instance with the dragdrop options
var textarea = ...;

sceditor.create(textarea, {
    // Enable the drag and drop plugin
    plugins: 'dragdrop',
    // Set the drag and drop plugin options
	dragdrop: dragdropOptions,
    
    // Rest of SCEditor options
    format: 'bbcode',
    icons: 'monocons',
    autofocus: true,
	style: 'themes/content/default.css'
});
```

Done! The editor will now support uploading images to imgur.
