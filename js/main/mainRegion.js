(function(){
    define(['marionette'], function(Marionette){

        var region = Marionette.Region.extend({
            el: '#content'
        });

        return region;
    });
})();
