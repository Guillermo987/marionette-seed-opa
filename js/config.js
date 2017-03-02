require.config({

    baseUrl: 'js',

    paths: {
        "babysitter": "../bower_components/backbone.babysitter/lib/backbone.babysitter",
        "wreqr": "../bower_components/backbone.wreqr/lib/backbone.wreqr",
        "backbone": "../bower_components/backbone/backbone",
        "jquery": "../bower_components/jquery/dist/jquery",
        "requirejs": "../bower_components/requirejs/require",
        "marionette": "../bower_components/marionette/lib/backbone.marionette",
        "underscore": "../bower_components/underscore/underscore",
        "signals": "../bower_components/signals/dist/signals",
        "crossroads": "../bower_components/crossroads/dist/crossroads",
        "hbs": '../bower_components/require-handlebars-plugin/hbs'
    },

    shim:{

        jquery: {
            exports: '$'
        },

        crossroads: {
            exports: 'signals',
            deps: ['signals']
        },

        underscore: {
            exports: '_'
        },

        "routePattern": {
            exports: 'RoutePattern'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        marionette: {
            deps: ['backbone', 'wreqr', 'babysitter'],
            exports: 'Marionette'
        },

        wreqr: {
            deps: ['backbone'],
            exports: 'Wreqr'
        },

        babysitter: {
            deps: ['backbone'],
            exports: 'Babysitter'
        }

    }

});