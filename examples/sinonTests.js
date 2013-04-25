test("awesome test", function() {
    var awesomeCalculator = sinon.stub().returns('totally awesome');
    equal(awesomeCalculator('Simon'), 'totally awesome');
});

test("stubs, mocks and spy test", function() {
    var MyObject = {
        method: function () {},
        mySpy: sinon.spy()
    };
    var mock = sinon.mock(MyObject);
    mock.expects("method").once().returns(42);

    equal(MyObject.method(), 42);
    mock.verify();

    MyObject.mySpy();
    ok(MyObject.mySpy.called);

});