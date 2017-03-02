define(['main/mainView', 'dispatcher'],
    function (MainView, dispatcher) {

        describe('Main View', function () {

            var mainViewInstance;

            before(function(){
                mainViewInstance = new MainView();
            });

            it('should have tests', function () {
                expect(mainViewInstance).to.exist;
            });

        });

    }
);