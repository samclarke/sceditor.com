---
layout: release
title: Version 1.4.4 released
excerpt: Details of the 1.4.4 release
tags: [releases, 1.4.4]
categories:
    - releases
---
## Version 1.4.4

Version 1.4.4 has been released. Thanks to everyone who contributed!

Lots of bug have been fixed along with two new translations.

There is also a couple of new options, [spellcheck][spellcheck] and [bbcodeTrim][bbcodeTrim] as well as a new method [currentBlockNode()][currentBlockNode].

 [spellcheck]: /documentation/options/#spellcheck
 [bbcodeTrim]: /documentation/options/#bbcodeTrim
 [currentBlockNode]: /api/sceditor/currentblocknode/


### Full 1.4.4 changelog:

<div class="well">
	<ul>
		<li>Fixed height auto expanding when resized.
		 &ndash; Thanks to @TimWardC3 for reporting</li>
		<li>Fixed emoticons with greater than (>) not being converted.
		 &ndash; Thanks to @imansa for reporting.</li>
		<li>Improved emoticonsCompat support so emoticons are converted to text if whitespace is removed.
		 &ndash; Thanks to @ostinelli for reporting</li>
		<li>Fixed bug causing spaces to not be inserted when an emoticon is inserted in emoticonsCompat mode.
		 &ndash; Thanks to @ostinelli for reporting</li>
		<li>Fixed bug with toolbar not being removed by destroy() when in a custom toolbarContainer.
		 &ndash; Thanks to @imansa for reporting.</li>
		<li>Added currentBlockNode() method.</li>
		<li>Improved multiline lists in source mode.
		 &ndash; Thanks to @liamdawe for reporting.</li>
		<li>Improve theme compatibility.</li>
		<li>Fixed issue with iOS not breaking long words.
		 &ndash; Thanks to Francesco for reporting.</li>
		<li>Fixed bug with IE not releasing focus when autoUpdate is enabled.
		 &ndash; Thanks to @LeeMcNeil for reporting.</li>
		<li>Improved IE range handling.</li>
		<li>Fixed IE height bug where blur() method increased the editors height.</li>
		<li>Fixed IE6/7 bug where there was a 2px height difference between WYSIWYG and source modes.</li>
		<li>Fixed new line auto appending after code/quote blocks not working.
		 &ndash; Thanks to @Dr1ks for reporting.</li>
		<li>Fixed issue with Opera adding blank lines.
		 &ndash; Thanks to @Dr1ks for reporting.</li>
		<li>Improved unlink to remove links without selecing the whole link.
		 &ndash; Thanks to @liamdawe for reporting.</li>
		<li>Fixed newline after [quote] being stripped.
		 &ndash; Thanks to @liamdawe for reporting.</li>
		<li>Fixed IE bug loading initially loading shorthand colors.
		 &ndash; Thanks to @Olive140 for reporting.</li>
		<li>Added bbcodeTrim option.</li>
		<li>Fixed bug with stripWhiteSpace and saved ranges causing a space after the caret to be removed.</li>
		<li>Added spellcheck option to disable the browsers built in spellchecker.</li>
		<li>Added ability to remove block level elements by placing the cursor at the start of them and
		 &ndash;ressing backspace.</li>
		<li>Added Greek translation.
		 &ndash; Thanks to Nikos Aggelis for translating.</li>
		<li>Improved insert and pasting to scroll to after the inserted/pasted content.</li>
		<li>Fixed bug with emoticons sometimes getting converted in code blocks.</li>
		<li>Added Hungarian translation
		 &ndash; Thanks to Ángyán László for translating.</li>
	</ul>
</div>
