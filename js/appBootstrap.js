(function () {
    define(['app',
            'main/mainRegion',
            'main/mainView',
            'route/router'],
        function (app,
                  MainRegion,
                  MainView,
                  Router) {

            app.on('initialize:before', function(){
                app.router = new Router();

                app.mainView = new MainView();
                app.mainRegion = new MainRegion();
                app.mainRegion.show(app.mainView);
            });

            app.on('initialize:after', function(){
                Backbone.history.start();
            });

            app.start();
        }
    );
}());