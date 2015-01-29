var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/14.
 * loading UI
 */
var view;
(function (view) {
    var LoadingView = (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            _super.call(this);
            this.init();
        }
        LoadingView.prototype.init = function () {
            this._tf = new egret.TextField();
            this._tf.width = 300;
            this._tf.height = 200;
            this._tf.textAlign = "center";
            this._tf.text = "Loading View open";
        };
        LoadingView.prototype.open = function () {
            this.addChild(this._tf);
        };
        LoadingView.prototype.close = function () {
            if (this.contains(this._tf)) {
                this.removeChild(this._tf);
            }
        };
        LoadingView.prototype.destroy = function () {
        };
        return LoadingView;
    })(egret.Sprite);
    view.LoadingView = LoadingView;
    LoadingView.prototype.__class__ = "view.LoadingView"; //end export
})(view || (view = {})); //end module
