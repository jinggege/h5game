var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/22.
 * 映射视觉元素 为子类提供存取接口
 */
var view;
(function (view) {
    var background;
    (function (background) {
        var BackgroundV = (function (_super) {
            __extends(BackgroundV, _super);
            function BackgroundV() {
                _super.call(this);
                this.initView();
            }
            BackgroundV.prototype.initView = function () {
                this._bgImg = new egret.Bitmap();
                this.addChild(this._bgImg);
            };
            BackgroundV.prototype.getBgimg = function () {
                return this._bgImg;
            };
            return BackgroundV;
        })(egret.Sprite);
        background.BackgroundV = BackgroundV;
        BackgroundV.prototype.__class__ = "view.background.BackgroundV"; // end export
    })(background = view.background || (view.background = {}));
})(view || (view = {})); //end module
