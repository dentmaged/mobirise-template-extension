mbrApp.loadComponents("template", {
    "template-block": {
        _group: "Content",
        _plugins: "template-plugin",
        _params: {
            header: {
                type: "text",
                title: "Header content",
                default: "Hello, world!"
            }
        },
        innerText: '<h1>' + this.header + '</h1>',
        header: "Hello, world!",
        _onParamsChange: function(unknown, parameter, defaultValue) {
            this.innerText = '<h1>' + this._params.header + '</h1>';
        }
    }
});