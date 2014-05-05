function addLink(href) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('link');
    style.type = 'text/css';
    style.rel = "stylesheet";
    style.href = href;
    head.appendChild(style);
}

function addScript(src) {
    var head, script;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
// addGlobalStyle('.OUTFOX_NANCI_TIPS {color: #008000;}.OUTFOX_NANCI_WRAPPER {color: #F00;}#newwordTable .word{color: red;}#newwordTable{position: absolute;background: #808080;z-index: 100000;left: 50%;margin-left: -480px;width: 960px;line-height: 24px;font-size: 16px;}#newwordTable .sentence b{color: green;}body .uk-form-horizontal .uk-form-label {width: 100px;}body .uk-form-horizontal .uk-form-controls {margin-left: 115px;}');

// key('d', activeYDictBookmarklet);

function initNewWordModal() {
    var htmlStr = [
        '<div id="newWordModal" class="uk-modal" style="display: none">',
        '<div class="uk-modal-dialog"><a class="uk-modal-close uk-close"></a>',
        '<form class="uk-form uk-form-horizontal">',
        '<div class="uk-form-row"><div class="uk-form-label">Word</div><div class="uk-form-controls" style="text-align: left;"><input type="text" class="uk-form-width-medium" id="newWordInput"></div></div>',
        '<div class="uk-form-row"><div class="uk-form-label">Sentence</div><div class="uk-form-controls"><textarea rows="10" class="uk-form-width-large" id="newWordSentence"></textarea></div></div>',
        '<div class="uk-form-row"><div class="uk-form-controls"><button class="uk-button" id="newWordSubmit">保存</button></div></div>',
        '</div></div>'
    ].join('');
    $('body').append($(htmlStr));
    $('#newWordSubmit').click(newWordSubmitHandler);
}

function addRoute(ruleHost, rulePath, cb) {
    if (!cb) {
        cb = rulePath;
        rulePath = null;
    }
    if (new RegExp(ruleHost).test(location.host)) {
        if (rulePath) {
            if (new RegExp(rulePath).test(location.path)) {
                cb();
            } else {
                return;
            }
        }
        cb();
    }
}

addScript('http://raw.githubusercontent.com/gaohailang/tampermonkey-scripts/master/dist-scripts.js');