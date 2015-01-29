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
    var loading;
    (function (loading) {
        var LoadingC = (function (_super) {
            __extends(LoadingC, _super);
            function LoadingC() {
                _super.call(this);
                this.init();
            }
            LoadingC.prototype.init = function () {
            };
            LoadingC.prototype.open = function () {
            };
            LoadingC.prototype.getLevel = function () {
                return config.UIKey.UI_LEVEL_3;
            };
            LoadingC.prototype.close = function () {
                /*
                if(this.contains(super.label)){
                    this.removeChild(super.label);
                }
                */
            };
            LoadingC.prototype.destroy = function () {
            };
            return LoadingC;
        })(LoadingV);
        loading.LoadingC = LoadingC; //end export
    })(loading = view.loading || (view.loading = {}));
})(view || (view = {})); //end module
//# sourceMappingURL=LoadingC.js.map