---
title: Version 1.3.6 released
excerpt: Details of the 1.3.6 release
date: 2012-07-14
slug: version-1-3-6-released
---
## Version 1.3.6

Mostly bug fixes with this release. The biggest change is that the editor now has much better iOS support.

A new function `blur()` has also been added which will remove focus from the editor.

### Full 1.3.6 changelog:

<div class="well">
	<ul>
		<li>Added Spanish translation<br>
			&ndash; Thanks to Maxpower for translating</li>
		<li>Fixed YouTube command not matching youtu.be URLs</li>
		<li>Added form reset support</li>
		<li>Added autoExpand option</li>
		<li>Fixed bug related to inserting BBCodes in source mode when textarea is empty.<br>
			&ndash; Thanks to Martec for reporting</li>
		<li>Fixed stripQuotes bug<br>
			&ndash; Thanks to Maxpower for reporting</li>
		<li>Fixed destory() to stop memory leak</li>
		<li>iOS bug with content overflowing the container</li>
		<li>Fixed font size BBCode bug with WebOS browser</li>
		<li>Added blur() function</li>
		<li>Fixed list bug where newlines from the end would be removed<br>
			&ndash; Thanks to Birkoff Keren for reporting</li>
		<li>Fixed whitespace removal bug causing some whitespace to be left.<br>
			&ndash; Thanks to Martec for reporting</li>
		<li>Fixed val() helper function bug returning HTML when in source mode.<br>
			&ndash; Thanks to Maxpower for reporting</li>
		<li>Fixed bug with IE compatibility modes "Quirks" and "IE 7" causing new lines not to show.</li>
	</ul>
</div>
