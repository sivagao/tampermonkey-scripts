addRoute('github.com', '.*/blob/.*', function() {
    // code src page
    console.log('github.js is running');

    // addCopySrcBtn
    (function() {

        function _addCopySrcBtn() {
            var copySrcBtn = $('<button aria-label="copy to clipboard" class="js-copySrcBtn js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="#" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>').appendTo('.actions .button-group');
            var codeSrcText = '';
            $('.code-body .line').each(function(idx, item) {
                codeSrcText += $(item).text() + '\n'
            });
            copySrcBtn.attr('data-clipboard-text', codeSrcText);
        }

        // GitHub doesn't reload the page but uses pjax. Need to detect and load Octotree.
        function detectLocationChange() {
            if ($('.js-copySrcBtn').length) return;
            _addCopySrcBtn();
        }
        window.setInterval(detectLocationChange, 200);
        detectLocationChange();
    })();
});