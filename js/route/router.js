(function(){
    define(['marionette', 'route/controller'],
        function (Marionette, Controller) {

            var router = Marionette.AppRouter.extend({

                controller: new Controller(),

                appRoutes: {
                    'module/:name': 'loadModule',
                    '*path': 'defaultPathAction'
                }
            });

            return router;
        }
    );
}());
