define(['pages/pageOneView'],
    function (PageOne) {

        describe('PageOne', function () {

            var p;

            before(function(){
                p = new PageOne();
            });

            it('should have a magic attribute', function () {

                p.render();
                expect(p.$('.page-normal')).to.have.attr('foo');

            });

        });

    }
);