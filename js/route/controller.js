(function () {
    define(['underscore', 'dispatcher', 'backbone'],
        function (_, dispatcher, Backbone) {

            var controller = function(){};

            _.extend(controller.prototype, {

                defaultPathAction: function(){
                    this.loadModule('A');
                },

                loadModule: function(name){
                    dispatcher.trigger('module.nav', {
                        name: name,
                        path: Backbone.history.fragment
                    });
                }

            });

            return controller;

        }
    );
}());