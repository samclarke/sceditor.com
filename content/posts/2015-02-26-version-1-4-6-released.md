---
layout: release
title: Version 1.4.6 released
excerpt: Details of the 1.4.6 release
tags: [releases, 1.4.6]
categories:
    - releases
---
## Version 1.4.6

Version 1.4.6 has been released. Thanks to everyone who contributed!

This release is mostly code refactoring and bug fixes. There are a few new translations which have been added too.

From this release onwards the version numbering will use [Semantic Versioning](http://semver.org).

### Full 1.4.6 changelog:

<div class="well">
	<ul>
			<li>Fixed resize issue with Android browsers.
			 &ndash; Thanks to @scripple for fixing.</li>
			<li>Fixed bug with table being turned into paragraphs.
			 &ndash; Thanks to @jetand for fixing.</li>
			<li>Refactored the code so that it's in modules.
				The code is now much more readable and far easier to maintain and test.
				This change is 100% backwards compatible with the minified version and
				running the build will also create a backwards compatible non-minified
				version.
				The non-minified non-built code will require an AMD module loader to
				load it.</li>
			<li>Refactored all the unit tests for the new modules.</li>
			<li>Added manual tests.</li>
			<li>Fixed bug with RangeHelper.getOuterText() in IE < 9 when getting text after</li>
			<li>Fixed bug with RangeHelper.insertNode() in IE < 9 when inserting a documentFragment</li>
			<li>Fixed bug with dom.extractContents() method moving extracted element
				children into the returned documentFragment</li>
			<li>Fixed bug with valueChanged event causing an error if the editor is
				destroyed before it has finished its checks.</li>
			<li>Enabled valueChanged on sourceMode.</li>
			<li>Updated the Brazilian Portuguese translation.
			 &ndash; Thanks to @martec</li>
			<li>Fixed HTML to BBCode newline handling causing extra newlines to be added.
			 &ndash; Thanks to @jetand for reporting.</li>
			<li>Added SaurceLabs integration to automatically run QUnit tests in multiple
				browsers.</li>
			<li>Added undo plugin.
			 &ndash; Thanks to @brunoais for creating.</li>
			<li>Added galician and catalan translations and updated Spanish translation.
			 &ndash; Thanks to @FranSobrino for translating.</li>
			<li>Fixed bug with FF causing newline to appear when something is typed.
			 &ndash; Thanks to @q2apro for reporting.</li>
			<li>Fixed bug with spaces sometimes disappearing from pasted text when using the
				XHTML plugin.
			 &ndash; Thanks to @q2apro for reporting.</li>
			<li>Fixed issue with YouTube not showing fullscreen button inside the editor.
			 &ndash; Thanks to @kron-1 for reporting.</li>
			<li>Fixed bug causing window to scroll when blur is called in FF.
			 &ndash; Thanks to @spuds for reporting.</li>
			<li>Remove deprecated keyPress property from commands.</li>
			<li>Fixed bug with button states not being updated when called via shortcuts.
			 &ndash; Thanks to @echteinfachtv for reporting.</li>
			<li>Added Lithuanian translation.
			 &ndash; Thanks to @q2apro for translating.</li>
			<li>Fixed bug causing newlines to not always be added when return is pressed
				at the end of quotes and code blocks.
			 &ndash; Thanks to @barbuslex for reporting.</li>
			<li>Changed the http:// value in inputs to be a placeholder.</li>
			<li>Changed createDropDown() to focus on the first input or textarea element.</li>
			<li>Fixed bug with lists inside quote blocks.
			 &ndash; Thanks to @barbuslex for reporting.</li>
			<li>Fixed bug with code blocks not being removed when backspace is pressed.</li>
			<li>Fixed bug with IE not removing blocks when backspace is pressed.</li>
			<li>Added optional description to email dropdown.
			 &ndash; Thanks to @PaulBender for suggesting.</li>
			<li>Fixed bug with autoUpdate causing double clicking on [sub]/[sup] to not
				remove styling.
			 &ndash; Thanks to @q2apro for reporting.</li>
			<li>Fixed possible XSS attack in IE <= 8 when using BBCode plugin to edit
				malicious BBCode.</li>
			<li>Improved build and added CSS autoprefixer.
			 &ndash; Thanks to @Gazenwagen for improving</li>
			<li>Added Czech translation
			 &ndash; Thanks to Daniel Vítek for translating</li>
			<li>Fixed source button not showing as active when in source mode.
			 &ndash; Thanks to @cyphix333 for reporting.</li>
			<li>Fixed bug with extra newlines being ad
			 &ndash; Thanks to @cyphix333 for reporting.</li>
	</ul>
</div>
