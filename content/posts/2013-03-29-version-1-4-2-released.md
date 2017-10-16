---
title: Version 1.4.2 released
excerpt: Details of the 1.4.2 release
date: 2013-03-29
slug: version-1-4-2-released
---
## Version 1.4.2

Version 1.4.2 has been released with numerous bug fixes. Thanks to everyone who contributed!

The only big change this version, other than the bug fixes, is the addition of the `emoticons()` method which lets you enable/disable emoticons while editing.


### Full 1.4.2 changelog:

<div class="well">
	<ul>
		<li>Added emoticons() method which allows enabling/disabling emoticons at runtime.</li>
		<li>Fixed bug with jQuery UI dialogs and SCEditor dropdowns appearing behind them.<br>
		 &ndash; Thanks to @EugeneAksyonov for reporting</li>
		<li>Fixed bug with multiple editors and maximise.<br>
		 &ndash; Thanks to Tauno for reporting</li>
		<li>Fixed whitespace handling bug causing new lines to be removed from text pasted from Word.<br>
		 &ndash; Thanks to @lpuig for reporting</li>
		<li>Improved dropdowns to close if the button is clicked twice.<br>
		 &ndash; Thanks to @hhy89 for updating</li>
		<li>Fixed bug with Chrome losing the selection when using autoUpdate option.<br>
		 &ndash; Thanks to @lpuig for reporting</li>
		<li>Added support for auto focus to place the cursor at the end.</li>
		<li>Fixed bug where pasted emoticons ":)" were not being converted into emoticon images.<br>
		 &ndash; Thanks to @shaoner for reporting</li>
		<li>Fixed bug where if the BBCode styles property was null it caused an error.<br>
		 &ndash; Thanks to @OmarHawk for reporting</li>
		<li>Fixed bug with iOS losing focus.<br>
		 &ndash; Thanks to @coder4u for reporting.</li>
		<li>Fixed bug with emoticonsRoot option not working at startup.<br>
		 &ndash; Thanks to @tucan39 for reporting</li>
		<li>Fixed bug with unknown BBCodes being handled incorrectly.<br>
		 &ndash; Thanks to @KN4CK3R for reporting</li>
		<li>Fixed bug with % based widths and heights.</li>
		<li>Fixed bug with editor height when created in a hidden div.<br>
		 &ndash; Thanks to @berridgeab for reporting</li>
		<li>Fixed bug with new lines and when two block level elements are next to each other.<br>- Thanks to @martec for reporting</li>
		<li>Fixed bug with emoticonsRoot being preprended multiple times if more than one editor instance.<br>
		 &ndash; Thanks to @KN4CK3R for reporting</li>
	</ul>
</div>

