---
title: Version 3.0.0 released
excerpt: Details of the 3.0.0 release
tags: [releases]
date: 2021-02-24
slug: version-3-0-0-released
---

This main feature of this release is fix to prevent XSS with the default commands along with dropping IE and legacy Edge support.

The editor also now includes the [dompurify](https://github.com/cure53/DOMPurify)  library to help prevent any future XSS attacks. This isn't fully backwards compatible as `dompurify` may cause some HTML to be stripped. If you have any code that includes iframes, the allowed URLs will need to be added to the new `allowedIframeUrls` option.

The other breaking change is that the no longer supports IE and legacy Edge. The editor can still run in source mode in those browsers if the `runWithoutWysiwygSupport` option is enabled.

There's also some bug fixes included in this release too.

Thanks to everyone who contributed!

## Full changelog:

<ul>
	<li>Fixes XSS issues by using dompurify.
		<br />&ndash; Thanks to @mufeedvh for fixing.</li>
	<li>Fixed missing user input escaping for default commands.
		<br />&ndash; Thanks to @dvz for fixing.</li>
	<li>Fixed bug so nvda can read editor content.
		<br />&ndash; Thanks to @repl-shenoy-sukumaran for reporting and fixing.</li>
	<li>Fixed bug with alignment removing line breaks in lists,
		<br />&ndash; Thanks to @lucaslg for reporting and @dclause for fixing.</li>
	<li>Fixed BBCode bug with list commands in source mode not wrapping selected text.
		<br />&ndash; Thanks to @tomdav999 for reporting and @live627 for fixing.</li>
	<li>Fixed issue with comment nodes sometimes causing an error.
		<br />&ndash; Thanks to @karolinaskiba for reporting</li>
	<li>Fixed bug with BBCode attributes containing multiple quotes where only the first was being escaped.</li>
	<li>Removed unselectable parameter from createDropDown method which was needed for IE</li>
	<li>Removed ie property which used to give the current IE version</li>
</ul>
