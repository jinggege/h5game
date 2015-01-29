var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/23.
 */
var view;
(function (view) {
    var loading;
    (function (loading) {
        var LoadingV = (function (_super) {
            __extends(LoadingV, _super);
            function LoadingV() {
                _super.call(this);
                this.initView();
            }
            LoadingV.prototype.initView = function () {
                this._tf = new egret.TextField();
                this._tf.width = 300;
                this._tf.height = 200;
                this._tf.textAlign = "center";
                this._tf.text = "Loading View open";
                this.addChild(this._tf);
            };
            Object.defineProperty(LoadingV.prototype, "label", {
                get: function () {
                    return this._tf;
                },
                enumerable: true,
                configurable: true
            });
            return LoadingV;
        })(egret.Sprite);
        loading.LoadingV = LoadingV;
        LoadingV.prototype.__class__ = "view.loading.LoadingV"; //end export
    })(loading = view.loading || (view.loading = {}));
})(view || (view = {})); //end module
