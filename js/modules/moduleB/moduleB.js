(function () {
    define(['marionette', 'modules/moduleB/moduleBview'],

        function (Marionette, ModuleBview) {

            var module = Marionette.Module.extend({

                startWithParent: false,

                onStart: function(options){
                    this.region = options.region;
                    this.region.show(new ModuleBview());
                },

                onStop: function(){
                    this.region.close();
                }

            });

            return module;
        }
    );
}());