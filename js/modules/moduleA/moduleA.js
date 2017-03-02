(function () {
    define(['marionette',
            'dispatcher',
            'crossroads',
            'pages/pageOneView',
            'pages/pageTwoView'],

        function (Marionette, dispatcher, crossroads, PageOne, PageTwo) {

            var module = Marionette.Module.extend({

                startWithParent: false,

                initialize: function(){

                    this.router = crossroads.create();
                    this.router.ignoreState = true;

                    this.router.addRoute('module/A/page/{pageNum}', this.loadPage.bind(this));
                    this.router.addRoute('module/A/:*:', this.loadDefaultPage.bind(this));
                    this.router.addRoute('', this.loadDefaultPage.bind(this));
                },

                loadDefaultPage: function(){
                    this.loadPage('1');
                },

                loadPage: function(pageNum){
                    if(pageNum == '1'){
                        this.region.show(new PageOne());
                    } else {
                        this.region.show(new PageTwo());
                    }
                },

                onStart: function(options){
                    this.region = options.region;
                    this.listenTo(dispatcher, 'module.nav', this.onModuleNav);

                    this.onModuleNav(options);
                },

                onModuleNav: function(options){
                    this.router.parse(options.path);
                }

            });

            return module;
        }
    );
}());