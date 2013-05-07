---
layout: release
title: Version 1.4.3 released
excerpt: Details of the 1.4.3 release
tags: [releases, 1.4.3]
categories:
    - releases
---
## Version 1.4.3

Version 1.4.3 has been released. Thanks to everyone who contributed!

There are a lot of bug fixes in this release along with three new translations.

There are also some new methods, [css()][css], [toBBCode()][tobbode], [fromBBCode()][frombbode], [selectOuterText()][selectOuterText] and [getOuterText()][getOuterText] and [getBody()][getbody].

 [css]: /api/sceditor/css/
 [tobbode]: /documentation/plugins/bbcode/#toBBCode
 [frombbode]: /documentation/plugins/bbcode/#fromBBCode
 [selectOuterText]: /api/rangehelper/selectoutertext/
 [getOuterText]: /api/rangehelper/getoutertext/
 [getbody]: /api/sceditor/getbody/


### Full 1.4.3 changelog:

<div class="well">
	<ul>
		<li>Added css() method which allows getting/setting inline CSS for the WYSIWYG editor.</li>
		<li>Added Simplified Chinese translation.
		 &ndash; Thanks to Yorgo for translating.</li>
		<li>Fixed bug with insert() and setting filtering to false.</li>
		<li>Added Travis-CI testing and improved tests</li>
		<li>Fixed bug with emoticons preloading even if disabled.
		 &ndash; Thanks to @novadk for reporting.</li>
		<li>Fixed error when editor is hidden and autofocus is enabled.</li>
		<li>Fixed bug with insert() removing first or last div even if it has styling.</li>
		<li>Fixed error with IE 8 height.
		 &ndash; Thanks to @arjunasuresh3 for reporting and fixing.</li>
		<li>Added toBBCode() and fromBBCode() methods.</li>
		<li>Fixed bug with spaces being removed if they are the only content of a tag.</li>
		<li>Renamed Norwegian translation from no-NB to nb-NO.
		 &ndash; Thanks to @tim-se for reporting</li>
		<li>Fixed bug with jQuery UI dialogs appearing behind the editor.
		 &ndash; Thanks to @OmarHawk for reporting</li>
		<li>Added toolbarExclude option.
		 &ndash; Thanks to @tim-se for suggestion</li>
		<li>Fixed bug with unclosed BBCode tags being parsed as if they had a closing tag.
		 &ndash; Thanks to @KN4CK3R for reporting</li>
		<li>Added Polish translation.
		 &ndash; Thanks to @TheKerimek for translating</li>
		<li>Fixed bug with IE 10 not being able to select outside of the editor.
		 &ndash; Thanks to @novadk for reporting</li>
		<li>Added getBody() method which gets the WYSIWYG body node.
		 &ndash; Thanks to @arjunasuresh3 for adding</li>
		<li>Made selectOuterText() and getOuterText() methods on the rangeHelper accessible.</li>
		<li>Greatly increased the number of tests.</li>
		<li>Improved the XHTML plugin.</li>
		<li>Fixed bug with XHTML plugin outputting <br /> when editor is empty.
		 &ndash; Thanks to @tim-se for reporting</li>
		<li>Fixed Mozilla's junk attributes, type="_moz", _moz_dirty="" and _moz_editor_bogus_node.
		 &ndash; Thanks to @tim-se for reporting</li>
		<li>Added XHTML format plugin.</li>
		<li>Added shortcut support.</li>
		<li>Added Persian translation.
		 &ndash; Thanks to @ebadgh for translating!</li>
	</ul>
</div>
