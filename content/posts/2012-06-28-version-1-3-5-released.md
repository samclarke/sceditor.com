---
title: Version 1.3.5 released
excerpt: Details of the 1.3.5 release
date: 2012-06-28
slug: version-1-3-5-released
---
## Version 1.3.5

The biggest change in this update is the themes. All the themes now live in their own directory and [3 news ones have been added](/posts/themes-demo/).

Some extra options have also been added, `readOnly`, `autofocus`, `rtl` and `id`.

There are also quite a few small changes in this update like the addition of `sourceMode()`, `val()`, `insertText()` and `insert()` methods.

### Full 1.3.5 changelog:

<div class="well">
	<ul>
		<li>Fixed bug in FF making pasting via right click difficult when empty<br>
			&ndash; Thanks to Nibogo2 for reporting</li>
		<li>Added readonly method and option</li>
		<li>Added expandToContent method</li>
		<li>Reorgernised themes to their own directory.</li>
		<li>hanged themes to be in .less format and added to build file</li>
		<li>Added modern, office-toolbar and office themes</li>
		<li>Added autofocus option</li>
		<li>Added a roadmap to the GitHub wiki</li>
		<li>Added height and width methods</li>
		<li>Added method to check for WYSIWYG support</li>
		<li>Changed so that by default the editor won't start in browsers that do not support WYSIWYG editing (old mobile browsers)</li>
		<li>Added rtl option along with rtl &amp; ltr commands</li>
		<li>Added id option</li>
		<li>Added sourceMode, val, insertText and insert methods</li>
		<li>Fixed quote bug where author from nested quotes would be removed</li>
		<li>Added Estonian language file<br>
			&ndash; Thanks to Rivo for translating</li>
		<li>Fixed bug with dom.fixNesting when fixing certain tags</li>
		<li>Improve adding/updating/removing of commands and BBCodes</li>
		<li>Fixed bug causing elements that are styled with diplay: block to be treated as block level elements<br>
			&ndash; Thanks to Rene for reporting</li>
		<li>Added Brazilian Portuguese language file<br>
			&ndash; Thanks to Martec for translating</li>
	</ul>
</div>
