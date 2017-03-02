(function(){
    define(['app', 'marionette',
            'hbs!main/mainViewTemplate',
            'dispatcher',
            'components/footer',
            'modules/moduleA/moduleA',
            'modules/moduleB/moduleB',
            'pages/pageOneView'],

        function(app, Marionette, template, dispatcher,
                 Footer, ModuleA, ModuleB, ModuleBview){

            var view = Marionette.Layout.extend({

                template: template,

                regions: {
                    'mainContent': '.main-content',
                    'footer': '#footer'
                },

                onRender: function(){
                    this.footer.show(new Footer());
                },

                initialize: function(){
                    this.listenTo(dispatcher, 'module.nav', this.loadModule);
                },

                loadModule: function(options){

                    var name = options.name;
                    var path = options.path;

                    if(this.moduleName === name){
                        return;
                    }

                    if(this.module){
                        this.module.stop();
                    }

                    this.moduleName = name;

                    if(name == 'A'){
                        this.module = app.module('A', ModuleA);
                    } else if (name == 'B'){
                        this.module = app.module('B', ModuleB);
                    }

                    this.module.start({
                        path: path,
                        region: this.mainContent
                    });

                }

            });

            return view;
        }
    );
})();