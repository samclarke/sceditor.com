---
title: Files
permalink: /documentation/files/
weight: 8000
---

# Files <a id="files"></a>

You should normally only include the minified files from the `minified/` directory. They use a *lot* less bandwidth which lets the page load faster and keeps mobile users happy.


## Core files <a id="core"></a>

   * `minified/jquery.sceditor.min.js`  
     The core editor minified.

   * `minified/jquery.sceditor.default.min.css`  
     The default CSS used to style the content of the editor. The URL to this file should be passed via the `style` option.

   * `minified/jquery.sceditor.bbcode.min.js`  
     The core editor bundled with the BBCode plugin.

   * `minified/jquery.sceditor.xhtml.min.js`  
     The core editor bundled with the XHTML plugin.


## Plugins <a id="plugins"></a>

   * `minified/plugins/bbcode.js`  
     The minified BBCode plugin. Not needed if using the `minified/jquery.sceditor.bbcode.min.js` file.

   * `minified/plugins/xhtml.js`  
     The minified XHTML plugin. Not needed if using the `minified/jquery.sceditor.bbcode.xhtml.js` file.


## Themes <a id="themes"></a>

   * `minified/themes/default.css`  
     Default theme.

   * `minified/themes/modern.css`  
     Modern theme.

   * `minified/themes/office-toolbar.css`  
     Office Toolbar theme.

   * `minified/themes/office.css`  
     Office theme.

   * `minified/themes/square.css`  
     Square theme.
