describe("Unit Test", function() {
    var sayHelloNew;
    var called = false;
    beforeEach(function(done) {
        var oldHello = sayHello;
        sayHello = function(string) {
            called = true;
            done();
            return oldHello(string);
        }; 
        delaySayHello('Test');
    });

    it("should support async execution of test preparation and expectations", function(done) {
        expect(called).toBe(true);
        done();
    });

    it("should support sync execution", function() {
        var va = 1;
        expect(1).toEqual(1);
    });

});
