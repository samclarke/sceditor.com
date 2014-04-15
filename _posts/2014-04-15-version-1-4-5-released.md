---
layout: release
title: Version 1.4.5 released
excerpt: Details of the 1.4.5 release
tags: [releases, 1.4.5]
categories:
    - releases
---
## Version 1.4.5

Version 1.4.5 has been released. Thanks to everyone who contributed!

**Important**: This version fixes a potential XSS exploit where if someone loaded malicious BBCode into the editor (i.e. editing a malicious users BBCode) it could cause an XSS exploit. This does not affect the XHTML plugin as all XHTML, regardless of source, should be filtered server side unless it's from a trusted user. See the [XHTML plugin warning](/documentation/plugins/xhtml/#xhtml) for more information.

Other than that this version is mostly just bug fixes, there are a few new translations as well as the new indent/outdent commands.

Also there is a [bug in jQuery](http://bugs.jquery.com/ticket/14386) that causes IE 11 not to work. This is fixed in jQuery version 1.10.2 and above.


### Full 1.4.5 changelog:

<div class="well">
	<ul>
		<li>Added command shortcuts to tooltips.</li>
		 &ndash; Thanks to @brunoais</li>
		<li>Added Portuguese translation.</li>
		 &ndash; Thanks to @brunoais</li>
		<li>Added list indent and outdent commands.</li>
		 &ndash; Thanks to @brunoais</li>
		<li>Added Ukrainian translation.</li>
		 &ndash;hanks to @aqrln for translating</li>
		<li>Fixed bug with BBCode source editor creating links with [img] tags selected.</li>
		 &ndash; Thanks to @liamdawe for reporting.</li>
		<li>Fixed issue with insert() and FF.</li>
		 &ndash; Thanks to @martec for reporting.</li>
		<li>Fixed in IE8 and below with XHTML font size attribute converstion.</li>
		<li>Fixed typo in German translation.</li>
		 &ndash; Thanks to Ulf for reporting.</li>
		<li>Removed build.sh as grunt now does everything build.sh could.</li>
		<li>Added Italian translation.</li>
		 &ndash; Thanks to Tropico for translating.</li>
		<li>Fixed bug when insert empty node.</li>
		 &ndash; Thanks to @spuds for reporting.</li>
		<li>Fixed FF bug with dropdowns not opening via shortcuts.</li>
		 &ndash; Thanks to @echteinfachtv for reporting.</li>
		<li>Improved inserting so only scrolls if the end of the inserted HTML isn't in view.</li>
		<li>Added zh-TW translation.</li>
		 &ndash; Thanks to @gan068 for translating.</li>
		<li>Updated Polish translation.</li>
		 &ndash; Thanks to @gnysek for updating.</li>
		<li>Fix possible XSS if editing loading BBCode that someone else has written.</li>
		 &ndash; Thanks to for Sergiu reporting.</li>
		<li>Fixed default font size.</li>
		 &ndash; Thanks to @jetand for fixing.</li>
		<li>Added Japanese translation.</li>
		 &ndash; Thanks to @PyYoshi for translating.</li>
		<li>Fixed bug with XHTML plugin stripping iframes.</li>
		 &ndash; Thanks to @tim-se for reporting.</li>
		<li>Fixed bug with IE11 newline handling.</li>
	</ul>
</div>
