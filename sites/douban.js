addRoute('douban.com', 'subject/.*', function() {
    console.log('douban.js is running');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});