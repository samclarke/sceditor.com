---
title: Theming
permalink: /documentation/theming/
weight: 7000
---

# Theming


## HTML Structure <a id="html-structure"></a>

Outline of SCEditors HTML structure.

```html
<!-- Main container -->
<div class="sceditor-container">
    <!-- Toolbar container -->
    <div class="sceditor-toolbar">
        <!-- Toolbar group container -->
        <div class="sceditor-group">
            <!-- Toolbar button -->
            <a class="sceditor-button sceditor-button-[name]"
                data-sceditor-command="[name]"
                unselectable="on" title="[name]">

                <!-- Toolbar button text container -->
                <div unselectable="on">[tooltip or name]</div>
            </a>
        </div>
    </div>

    <!-- Contains the WYSIWYG editor -->
    <iframe></iframe>

    <!-- Contains the source mode editor -->
    <textarea></textarea>

    <!-- Grip used to resize the editor -->
    <div class="sceditor-grip"></div>

    <!-- Used to cover the WYSIWYG editor so mousemove events are still handled -->
    <div class="sceditor-resize-cover"></div>

    <!-- This is hidden and only used so that blur() can work -->
    <input>
</div>
```


## CSS Structure <a id="css-structure"></a>

<span class="Label Label--info">Note:</span> The contents of the <abbr title="What You See Is What You Get">WYSIWYG</abbr> iframe is styled via an external stylesheet which can be passed via the [style option](/documentation/options/#style) in the editors constructor.

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


## Theme Structure <a id="theme-structure"></a>

All the default themes in LESS CSS format and are located in the `src/themes/` directory.

To build and minify the themes run the command `build/build.sh --css` from the root SCEditor directory. The output will be placed in the `minified/themes` directory.
