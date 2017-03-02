(function () {
    define(['marionette','hbs!pages/pageOneTemplate'],

        function (Marionette, template) {

            var view = Marionette.ItemView.extend({
                template: template
            });

            return view;

        }
    );
}());