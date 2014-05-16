addRoute('github.com', '.*/blob/.*', function() {
    // code src page
    console.log('github.js is running');

    addCopySrcBtn();

    function addCopySrcBtn() {
        if ($('#addCopySrcBtn').length) return;
        var copySrcBtn = $('<button id="addCopySrcBtn" aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="#" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>').appendTo('.actions .button-group');
        var codeSrcText = '';
        $('.code-body .line').each(function(idx, item) {
            codeSrcText += $(item).text() + '\n'
        });
        copySrcBtn.attr('data-clipboard-text', codeSrcText);
    }
});