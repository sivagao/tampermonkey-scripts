
addRoute('.*', function() {
    console.log('siva" tampermonkey is running');
});addRoute('douban.com', 'subject/.*', function() {
    console.log('douban.js is running');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});addRoute('zh.asoiaf.wikia.com', function() {
    console.log('zh.asoiaf.wikia.com');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});

addRoute('douban.com', 'subject/.*', function() {
    console.log('douban.js is running');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});

addRoute('zh.asoiaf.wikia.com', function() {
    console.log('zh.asoiaf.wikia.com');
    document.onselectstart = function() {
        return true
    }
    document.oncontextmenu = function() {
        return true
    }
});

