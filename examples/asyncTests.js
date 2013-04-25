asyncTest("test something after an operation", function() {
    setTimeout(function() {
        console.log('operation');
        equal(1, 1);
        start();
    }, 1000);
});