---
title: Version 1.4.1 released
excerpt: Details of the 1.4.1 release
date: 2013-01-25
slug: version-1-4-1-released
---
## Version 1.4.1

Version 1.4.1 has been released with numerous bug fixes. Thanks to everyone who contributed!

Other than bug fixes the main changes are plugin support, the `blur()`, `keyDown()`, `keyPress()`, `keyUp()`, `rtl()` and `maximize()` methods and RTL theme support.

<span class="Label Label--important">Important</span> The minified file `jquery.sceditor.min.js` no longer has the BBCode plugin bundled in it. For both the editor and BBCode plugin use the `jquery.sceditor.bbcode.min.js` file instead.

### Full 1.4.1 changelog:

<div class="well">
	<ul>
		<li>Dropped GPL to match jQuery license.<br>
		 The editor can still be used under the GPLv2, GPLv3 or any other MIT compatible<br>
		 license. Changes can&#39;t be submitted back unless they are licensed under the MIT<br>
		 but then they couldn&#39;t before either as it was dual licensed under the MIT so<br>
		 there isn&#39;t really any change, just a bit simpler.</li>
		<li>Added blur, keyDown, keyPress and KeyUp helpers</li>
		<li>Added Turkish translation<br>
		 &ndash; Thanks to @MYaman34 for translating.</li>
		<li>Added button state support</li>
		<li>Added better plugin system</li>
		<li>Fixed emoticons now showing their code as a tooltip.</li>
		<li>Added support for custom emoticon tooltips.<br>
		 &ndash; Thanks to @Spuds for reporting</li>
		<li>Added nodechanged event.</li>
		<li>Improved BBCode attribute quoting support.<br>
		 &ndash; Thanks to @Spuds for reporting</li>
		<li>Added Arabic translation.<br>
		 &ndash; Thanks to @Atramez-Zeton for translating</li>
		<li>Added disablePasting option.</li>
		<li>Fixed problem with HTML5 form validation not working when using the editor.<br>
		 The editor will now just remove the required attribute from the original textarea<br>
		 so validation will either need to be done server side or manually.</li>
		<li>Added tabindex support. The tabindex will be picked up from the original textarea.<br>
		 &ndash; Thanks to @bmxgrover for reporting<br>
		 &ndash; Thanks to @Spuds for reporting</li>
		<li>Fixed bug with nested lists.<br>
		 &ndash; Thanks to @brunoais for reporting.</li>
		<li>Improved IE resize speed.</li>
		<li>Update themes to support showing active commands.</li>
		<li>Update themes to support showing a commands icon, text or both.</li>
		<li>Added new Monocon icons, licensed under the MIT license.</li>
		<li>Added selectionchanged event</li>
		<li>Fixed bug with LTR command not working.<br>
		 &ndash; Thanks to @charafweb for reporting</li>
		<li>Added zIndex option to allow setting the containers z-index.<br>
		 Fixes bug with modal jQuery UI dialogs.<br>
		 &ndash; Thanks to @prdatur for reporting and the fix.</li>
		<li>Fixed bug with percentage based widths.<br>
		 &ndash; Thanks to @charafweb for reporting.</li>
		<li>Improved RTL support. Added rtl() helper and improved all themes RTL support.</li>
		<li>Added maximize command and maximize() helper.</li>
		<li>Fixed bug with sentences wrapped in [] sometimes causing problems.<br>
		 &ndash; Thanks to @liamdawe for reporting</li>
	</ul>
</div>

