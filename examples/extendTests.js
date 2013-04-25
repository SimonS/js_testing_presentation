QUnit.extend( QUnit.assert, {
    textEqual: function(element, expected, message) {
        var actual = element.textContent;
        QUnit.push(QUnit.equiv(actual, expected), actual, expected, message);
    }
});

test("div text is hello world", function(is) {
    var el = document.getElementById('hello');
    is.textEqual(el, "Hello, World!");
});