---
title: Version 2.0.0 released
excerpt: Details of the 2.0.0 release
tags: [releases]
date: 2017-11-10
slug: version-2-0-0-released
---

In order to modernise the editor and tidy the API a bit and remove jQuery as a
hard dependency, there are a lot of backwards incompatible changes in this
release.

For a full list please see the [migrating to v2 post](/posts/migrating-to-v2/).

The main changes are:

 * Dropping jQuery as a hard dependency.
 * Moving the XHTML & BBCode plugins into a new `formats` option.
 * Adding SVG icon support.
 * Dropping support for IE < 10.

Another change is the default colour palette which has been updated to reduce
the number of options and make them larger:

![new colour palette](/images/posts/new-colour-palette.png)

## Full 2.0.0 changelog:

<ul>
	<li>Changed theme to use flexbox. Custom themes will need tweaking but otherwise
        this is backwards compatible.</li>
	<li>Updated pasting to normalize image pasting across browsers to paste images
        as Data URIs.</li>
	<li>Updated pasting to use clipboard API which stops the ugly flash caused by
        clearing the editor when paste filtering was enabled. As IE & Edge lack
        clipboard API support they still use the old behaviour.</li>
	<li>Added paste hooks for plugins.</li>
	<li>Fixed bug with tabs being stripped when switching between WYSIWYG and
        source mode.
        <br />&ndash; Thanks to @spuds for reporting</li>
	<li>Fixed bug where emoticons that are subsets of others may prevent the longer
        key from being replaced when switching between WYSIWYG and source mode.
        <br />&ndash; Thanks to @margarett for reporting</li>
	<li>Fixed issue with jQuery noConflict mode.
        <br />&ndash; Thanks to @Globulopolis for reporting</li>
	<li>Changed from JSCS and JSHint to ESLint for linting</li>
	<li>Dropped support for IE <= 9</li>
	<li>Updated default color palette to be smaller and increased color picker size.</li>
	<li>Added autoyoutube plugin that converts pasted Youtube links.
        <br />&ndash; Thanks to @cyphix333 for suggesting</li>
	<li>Updated XHTML plugin to not remove tag with a size from style/class attribtue.
        <br />&ndash; Thanks to @timint</li>
	<li>Fixed bug with XHTML plugin removing empty <td> tags.
        <br />&ndash; Thanks to @derplakatankleber for reporting</li>
	<li>Added allowedEmptyTags to XHTML plugin.</li>
	<li>Fixed bug with BBCode plugin where email shows a second prompt even when the
        first is cancelled.
        <br />&ndash; Thanks to @OlafvdSpek for reporting.</li>
	<li>Updated link dropdown to insert when enter is pressed.
        <br />&ndash; Thanks to @q2apro for reporting</li>
	<li>Updated rangeHelper.replaceKeyword() to match start of lines when whitespace
        is required. Enables AYT emoticon conversion to convert emoticons at the
        start of lines.
        <br />&ndash; Thanks to @barbuslex for reporting.</li>
	<li>Added plaintext plugin to remove formatting on paste.</li>
	<li>Fixed bug with FF lists adding extra lines.
        <br />&ndash; Thanks to @OmarHawk for reporting</li>
	<li>Fixed bug with nested lists creating invalid BBCode and HTML.
        <br />&ndash; Thanks to @naturalgeek for reporting</li>
	<li>Fixed bug with auto expand when maximised.
        <br />&ndash; Thanks to @mjau-mjau for reporting.</li>
	<li>Improved autoexpand to shrink when content reduces.
        <br />&ndash; Thanks to @Somnium7 for reporting.</li>
	<li>Added Indonesian translation.
        <br />&ndash; Thanks to @sndbckt for translating.</li>
	<li>Switched to using ES6 modules.</li>
	<li>Fixed bug with cursor being placed in wrong position on first focus.
        <br />&ndash; Thanks to @q2apro for reporting.</li>
	<li>Fixed BBCode parser bug with BBCodes opened or closed inside a tag which
        doesn't allow them as children (e.g. anything in [code] tags).
        <br />&ndash; Thanks to @emanuele45 for reporting.</li>
	<li>Fixed whitespace edge case causing extra lines to be added in BBCode.
        <br />&ndash; Thanks to @OmarHawk for reporting.</li>
	<li>Fixed issue placing cursor after custom block nodes.
        <br />&ndash; Thanks to @cyphix333 for reporting.</li>
	<li>Improved editor to make sure inlines are wrapped in &lt;p&gt; tags.
        <br />&ndash; Thanks to @q2apro for reporting.</li>
	<li>Prevent valueChanged event during composition.
        <br />&ndash; Thanks to @martec for reporting.</li>
	<li>Update URL place holders to https:// from http://
        <br />&ndash; Thanks to @MyBB-Andro for reporting.</li>
	<li>Improved pasting and enabled paste filtering by default</li>
	<li>Converted BBCode and XHTML plugins into formats</li>
	<li>Fixed issue with default emotions always being added.
        <br />&ndash; Thanks to @compojoom for reporting</li>
	<li>Update famfamfam icons to have red text for super/subscript.
        <br />&ndash; Thanks to @q2apro for updating</li>
	<li>Added support for SVG icon sets</li>
	<li>Moved jquery.sceditor.default.css to themes/content/default.css</li>
</ul>

