define(['modules/moduleA/moduleA', 'marionette'],
    function (ModuleA, Marionette) {

        describe('moduleA', function () {

            var app;
            var module;

            before(function(){
                app = new Marionette.Application();
                module = app.module('testModule', ModuleA);
            })

            it('should have unit tests', function () {
                expect(module).to.exist;
            });

        });

    }
);