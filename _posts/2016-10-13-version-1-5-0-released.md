---
layout: release
title: Version 1.5.0 released
excerpt: Details of the 1.5.0 release
tags: [releases, 1.5.0]
categories:
    - releases
---
## Version 1.5.0

Version 1.5.0 has been released. Thanks to everyone who contributed!

This release is mostly bug fixes with the addition of jQuery 3 support and some fixes for Edge.

### Full 1.5.0 changelog:

<div class="well">
	<ul>
		<li>Updated French translation.
			&ndash; Thanks to @KaseiFR</li>
		<li>Updated shortcuts to be prettier.
			&ndash; Thanks to @KaseiFR</li>
		<li>Fixed bug with wrong button state with autofocus.
			&ndash; Thanks to @OlafvdSpek for reporting.</li>
		<li>Fixed IE selection bug when repeatedly opening dropdowns.
			&ndash; Thanks to @q2apro for reporting.</li>
		<li>Fixed bug with selection being modified when calling val().
			&ndash; Thanks to @q2apro for reporting.</li>
		<li>Fixed bug with dropdown not being removed when the editor is destroyed.
			&ndash; Thanks to @odungern for reporting.</li>
		<li>Fixed bug with getOuterText() not always getting all the text.</li>
		<li>Fixed bug with selectOuterText() not selecting text across adjacent nodes.</li>
		<li>Fixed bug with lists in WebKit which could cause infinite loops.
			&ndash; Thanks to @taekvideo for reporting.</li>
		<li>Removed more button from emoticons unless there are actually more.
			&ndash; Thanks to @Destroy666x for reporting and @brunoais for fixing.</li>
		<li>Fixed bug with emoticonsCompat sometimes removing surrounding text</li>
		<li>when typing emoticons.</li>
		<li>Fixed bug with XHTML plugin when input value contains invalid attributes.
			&ndash; Thanks to Tim for reporting</li>
		<li>Fixed types in Russian & Ukrainian translations.
			&ndash; Thanks to @Dr1ks</li>
		<li>Added jQuery 3 support.
			&ndash; Thanks to @iam1me</li>
		<li>Fixed bug with YouTube embedding on HTTPS webpages.
			&ndash; Thanks to @MadSpindel for fixing.</li>
		<li>Fixed type in Brazilian Portuguese translation.
			&ndash; Thanks to @vinny</li>
		<li>Fixed bug with IE causing IndexSizeError when getting the selected range.
			&ndash; Thanks to @jetand for fixing.</li>
		<li>Added startInSourceMode option to start the editor in source mode.
			&ndash; Thanks to @brunoais</li>
		<li>Fixed issue with XHTML removing some nodes containing only a &lt;br /&gt;.
			&ndash; Thanks to @kt3k</li>
		<li>Fixed XHTML not removing empty tags containing .sceditor-ignore nodes.</li>
		<li>Mapped command to ctrl for Mac shortcuts.
			&ndash; Thanks to @webevolutis</li>
		<li>Fixed bug with IE edge not editing correctly.</li>
		<li>Created bower "sceditor" package.</li>
		<li>Added minified files to NPM package.</li>
	</ul>
</div>
