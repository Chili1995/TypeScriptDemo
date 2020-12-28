"use strict";
var Components;
(function (Components) {
    var SunComponent;
    (function (SunComponent) {
        var Test = /** @class */ (function () {
            function Test() {
                var elem = document.createElement('div');
                elem.innerText = '这是子命名空间';
                document.body.appendChild(elem);
            }
            return Test;
        }());
        SunComponent.Test = Test;
    })(SunComponent = Components.SunComponent || (Components.SunComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = '这是头部';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = '这是body';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = '这是底部';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
