(function () {
    define(['marionette', 'hbs!components/footerTemplate'],
        function (Marionette, template) {
            var footer = Marionette.ItemView.extend({
                template: template
            });
            return footer;
        }
    );
}());