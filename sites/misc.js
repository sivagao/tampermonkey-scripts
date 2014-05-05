addRoute('zh.asoiaf.wikia.com', function() {
    console.log('zh.asoiaf.wikia.com');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});