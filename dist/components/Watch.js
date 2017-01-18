"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Watch = (function (_super) {
    __extends(Watch, _super);
    function Watch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: new Date()
        };
        return _this;
    }
    Watch.prototype.componentDidMount = function () {
        var _this = this;
        this.timerId = setInterval(function () { return _this.setState({ date: new Date() }); }, 1000);
    };
    Watch.prototype.componentWillUnmount = function () {
        clearInterval(this.timerId);
    };
    Watch.prototype.render = function () {
        return React.createElement("h2", null, this.state.date.toLocaleTimeString());
    };
    return Watch;
}(React.Component));
exports.Watch = Watch;
//# sourceMappingURL=Watch.js.map