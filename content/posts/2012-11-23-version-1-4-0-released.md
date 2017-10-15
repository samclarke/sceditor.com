---
layout: release
title: Version 1.4.0 released
excerpt: Details of the 1.4.0 release
tags: [releases, 1.4.0]
categories:
    - releases
---
## Version 1.4.0

It's finally here! Version 1.4.0 has been released. Thanks to everyone who contributed!

There has been lot of improvements to the BBCode parser in this version, including better support for custom self closing tags and different BBCode dialects.

<span class="Label Label--important">Important</span> This version is *not* backwards compatible with previous versions. Some functions have been removed/renamed plus the default BBCode dialect has changed slightly.

As much as I hate breaking backwards compatibility these updates really needed doing. Hopefully it will be a long time before any more non-backwards compatible changes will need to be done.

### Full 1.4.0 changelog:

<div class="well">
	<ul>
		<li>New theme "square" added</li>
		<li>Some none-backwards compatible tidying:<br>
		All occurrences of <code>textEditor</code> have been changed to <code>sourceEditor</code><br>
		All occurrences of <code>updateTextareaValue</code> have been changed to <code>updateOriginal</code><br>
		All occurrences of <code>destory</code> have finally been renamed to <code>destroy</code><br>
		Removed the deprecated <code>setCommand</code> and <code>commandExists</code> functions.</li>
		<li>Added resizeWidth and resizeHeight options to allow disabling of either width or height resizing while keeping the other</li>
		<li>Improved resize handling</li>
		<li>Updated build.php</li>
		<li>Fixed bug with emoticons containing backslashes.<br>
			&ndash; Thanks to emanuele45 for the fix.</li>
		<li>Fixed bug when pasting from Word.<br>
			&ndash; Thanks to @Spuds for reporting.</li>
		<li>Fixed bug causing scrollbar to change when inserting BBCode in source mode.<br>
			&ndash; Thanks to Martec for reporting</li>
		<li>Fixed bug causing cursor position to be lost in FF when getting the editors value.<br>
			&ndash; Thanks to @Spuds for reporting</li>
		<li>Improve IE support</li>
		<li>Moved roadmap from GitHub wiki to source directory for easier editing.</li>
		<li>Added a new much more flexible BBCode parser</li>
		<li>Added new option to auto-update original textbox on blur event occurring on SCEditor.<br>
			&ndash; Thanks to @maiiku for adding this feature</li>
		<li>Updated sceditor() to return the instance/instances of the editor by passing "instance" to sceditor() and protect against re-initialization.<br>
			&ndash; Thanks to @maiiku for reporting</li>
		<li>Updated sceditor() to return the current state of the editor by passing state to sceditor().<br>
			&ndash; Thanks to @maiiku</li>
		<li>Added IE 10 support</li>
		<li>Added Vietnamese translation.<br>
			&ndash; Thanks to Chien for translating</li>
		<li>Added plugins option - Thanks to @maiiku</li>
		<li>Updated editor to force new line after code and quote tags so that text can be entered after them.<br>
			&ndash; Thanks to Logan</li>
	</ul>
</div>
