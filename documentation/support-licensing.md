---
layout: doc
title: Support & Licensing
permalink: /documentation/support-licensing/
categories:
    - Docs
---

## Support/Licensing


### Support <a id="support"></a>

If you have any questions or comments about SCEditor, you can contact me directly at `sam [at] sceditor.com`.


### Licensing <a id="licensing"></a>

SCEditor is licensed under the MIT license.

<div class="well">
	<p>Copyright (C) 2011 by Sam Clarke and contributors &ndash;
	<a href="http://www.sceditor.com/">sceditor.com</a></p>

	<p>Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:</p>

	<p>The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.</p>

	<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.</p>
</div>


### FAQ <a id="faq"></a>


#### I've found a bug!

If you've found a bug, please report it using the [GitHub issues page](https://github.com/samclarke/SCEditor/issues/new).

Alternatively you can also contact me directly at `sam [at] sceditor.com`.


#### Can I use SCEditor in commercial projects?

Yes! SCEditor is licensed under the MIT license which allows both commercial and non-commercial use.


#### Do you offer paid commercial support?

If you would like commercial support, just send an e-mail to `sam [at] sceditor.com`. If you only have a basic question, support is free!


#### Can the BBCode be parsed client side?

While it can technically be parsed client side, the whole point of using BBCode is so the server can safely convert it into HTML.

If BBCode is parsed on the client side, it can no longer be trusted. There is nothing to stop an attacker sending malicious HTML instead of the HTML from the parsed BBCode.

Nothing on client side can prevent this as an attacker can simply disable JavaScript or bypass the web page completely by sending a request directly to the server.

If you want to send (X)HTML, the XHTML plugin would be a better choice. The HTML will still need to sanitised server side to prevent XSS attacks.