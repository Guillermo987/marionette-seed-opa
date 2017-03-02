(function () {
    define(['marionette','hbs!modules/moduleB/moduleBtemplate'],

        function (Marionette, template) {

            var view = Marionette.ItemView.extend({
                template: template
            });

            return view;

        }
    );
}());