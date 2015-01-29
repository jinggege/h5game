var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/14.
 */
var view;
(function (view) {
    var TV = (function (_super) {
        __extends(TV, _super);
        function TV() {
            _super.call(this);
        }
        return TV;
    })(egret.Sprite);
    view.TV = TV;
    TV.prototype.__class__ = "view.TV"; //end export
})(view || (view = {})); //end module
