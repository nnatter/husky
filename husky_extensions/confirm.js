(function() {

    'use strict';

    define({

        name: 'Confirm',

        initialize: function(app) {

            app.sandbox.confirm = {

                /**
                 * Shows a confirmation box
                 * @param that - the context in which the box gets displayed. Must be an aura-component with a sandbox and an element
                 * @param title - the title (or translation key) for the box
                 * @param message - the message (or translation key) for the box
                 * @param okCallback - callback to execute after box was confirmed
                 * @param closeCallback - callback to execute on cancel
                 */
                warning: function (that, title, message, okCallback, closeCallback) {
                    var $element = app.core.dom.createElement('<div/>');
                    app.core.dom.append(that.$el, $element);

                    that.sandbox.start([
                        {
                            name: 'overlay@husky',
                            options: {
                                el: $element,
                                title: app.sandbox.translate(title),
                                message: app.sandbox.translate(message),
                                closeCallback: closeCallback,
                                okCallback: okCallback,
                                type: 'warning'
                            }
                        }
                    ]);
                }
            };
        }
    });
})();


