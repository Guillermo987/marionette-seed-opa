(function () {
    define(['backbone', 'underscore'],
        function (Backbone, _) {

            function match(router, fragment){
                var routes = _.pairs(router.options.appRoutes);
                var route = null;
                var params = null;
                var matched;

                matched = _.find(routes, function(handler) {
                    route = _.isRegExp(handler[0]) ? handler[0] : router._routeToRegExp(handler[0]);
                    return route.test(fragment);
                });

                if(matched) {
                    params = router._extractParameters(route, fragment);
                    route = matched[1];
                }

                return {
                    route : route,
                    fragment : fragment,
                    params : params
                };
            };

            function trigger(router, fragment){
                var r = match(router, fragment);
                console.log('fragment', fragment);
                console.log('matched', r.route);
                if(r.route && router.options.controller[r.route]){
                    router.options.controller[r.route].apply(router.options.controller, r.params);
                }
            };

            return {
                match: match,
                trigger: trigger
            }
        }
    );
}());