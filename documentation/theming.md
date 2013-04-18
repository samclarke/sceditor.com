---
layout: doc
title: Theming
permalink: /documentation/theming/
categories:
    - Docs
---

## Theming


### HTML Structure <a id="html-structure"></a>

Outline of SCEditors HTML structure.

<pre class="prettyprint linenums">
&lt;!-- Main container --&gt;
&lt;div class="sceditor-container"&gt;
    &lt;!-- Toolbar container --&gt;
    &lt;div class="sceditor-toolbar"&gt;
        &lt;!-- Toolbar group container --&gt;
        &lt;div class="sceditor-group"&gt;
            &lt;!-- Toolbar button --&gt;
            &lt;a class="sceditor-button sceditor-button-[name]"
                data-sceditor-command="[name]"
                unselectable="on" title="[name]"&gt;

                &lt;!-- Toolbar button text container --&gt;
                &lt;div unselectable="on"&gt;[tooltip or name]&lt;/div&gt;
            &lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Contains the WYSIWYG editor --&gt;
    &lt;iframe&gt;&lt;/iframe&gt;

    &lt;!-- Contains the source mode editor --&gt;
    &lt;textarea&gt;&lt;/textarea&gt;

    &lt;!-- Grip used to resize the editor --&gt;
    &lt;div class="sceditor-grip"&gt;&lt;/div&gt;

    &lt;!-- Used to cover the WYSIWYG editor so mousemove events are still handled --&gt;
    &lt;div class="sceditor-resize-cover"&gt;&lt;/div&gt;

    &lt;!-- This is hidden and only used so that blur() can work --&gt;
    &lt;input&gt;
&lt;/div&gt;
</pre>


### CSS Structure <a id="css-structure"></a>

<span class="label label-info">Note:</span> The contents of the <abbr title="What You See Is What You Get">WYSIWYG</abbr> iframe is styled via an external stylesheet which can be passed via the [style option](/documentation/options/#style) in the editors constructor.

<div class="well">
	<ul>
		<li>
			<strong>div.sceditor-container</strong><br>
			The container for the whole editor.
			The CSS class <code>.sourceMode</code> will be added when in source mode and the class <code>.wysiwygMode</code> will be added when in <abbr title="What You See Is What You Get">WYSIWYG</abbr> mode.

			<ul>
				<li>
					<strong>div.sceditor-toolbar</strong><br>
					The container for the toolbar.
				</li>

				<li>
					<strong>div.sceditor-group</strong><br>
					Toolbar group.

					<ul>
						<li>
							<strong>a.sceditor-button</strong><br>
							A toolbar button.
							The class <code>.disabled</code> will be added if the command is not supported in the current mode.
						</li>

						<li>
							<strong>a.sceditor-button-[name]</strong><br>
							Same as the previous class but [name] is replaced with the buttons command name, e.g. <code>.sceditor-button-bold</code>, <code>.sceditor-button-italic</code>
						</li>

						<li>
							<strong>div</strong><br>
							<code>div</code> containing the buttons accessibility text and normally has the background image is set to the button's icon too
						</li>
					</ul>
				</li>

				<li>
					<strong>iframe</strong><br>
					<code>iframe</code> used for the <abbr title="What You See Is What You Get">WYSIWYG</abbr> editor. This must be selected with the HTML element tag name
				</li>

				<li>
					<strong>textarea</strong><br>
					<code>textarea</code> used for the source mode editor. This must be selected with the HTML element tag name
				</li>

				<li>
					<strong>div.sceditor-grip</strong><br>
					Grip used to resize the editor
				</li>

				<li>
					<strong>div.sceditor-resize-cover</strong><br>
					<code>div</code> which covers the editor during resizing
				</li>

				<li>
					<strong>div.sceditor-dropdown</strong><br>
					<code>div</code> containing the dropdown
				</li>
			</ul>
		</li>
	</ul>
</div>


### Theme Structure <a id="theme-structure"></a>

All the default themes in LESS CSS format and are located in the `src/themes/` directory.

To build and minify the themes run the command `build/build.sh --css` from the root SCEditor directory. The output will be placed in the `minified/themes` directory.
