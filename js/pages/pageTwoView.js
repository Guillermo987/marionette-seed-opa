(function () {
    define(['marionette','hbs!pages/pageTwoTemplate'],

        function (Marionette, template) {

            var view = Marionette.ItemView.extend({
                template: template
            });

            return view;

        }
    );
}());