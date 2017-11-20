---
title: Version 2.1.0 released
excerpt: Details of the 2.1.0 release
tags: [releases]
date: 2017-11-20
slug: version-2-1-0-released
---

This release is mainly to fix a bug with pasting that can cause the clipboard
contents to be invisibly added to the end of the editor.

There's also a new autosave plugin that saves the editors contents to localStorage.


## Full changelog:

<ul>
	<li>Fixed surrounding space being removed when calling insert().
		<br />&ndash; Thanks to @brunoais for reporting</li>
	<li>Added autosave plugin.</li>
	<li>Added ability to bind to paste & pasteraw events.</li>
	<li>Remove get() call on textarea (fixes mootools conflict).
		<br />&ndash; Thanks to @compojoom for reporting.</li>
	<li>Removed paste command from default toolbar as only supported in IE.</li>
	<li>Fixed error getting computed style on none element nodes in DOM css().</li>
</ul>
