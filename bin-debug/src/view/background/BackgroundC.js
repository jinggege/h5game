var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/15.
 */
var view;
(function (view) {
    var background;
    (function (background) {
        var BackgroundC = (function (_super) {
            __extends(BackgroundC, _super);
            function BackgroundC() {
                _super.call(this);
                this.init();
            }
            BackgroundC.prototype.init = function () {
            };
            BackgroundC.prototype.open = function () {
                if (_super.prototype.getBgimg.call(this).texture == undefined) {
                    _super.prototype.getBgimg.call(this).texture = manage.LoadManage.instance().getTextureByName(config.ResKey.GAME_BG_NAME);
                }
            };
            BackgroundC.prototype.getLevel = function () {
                return config.UIKey.UI_LEVEL_1;
            };
            BackgroundC.prototype.close = function () {
            };
            BackgroundC.prototype.destroy = function () {
            };
            return BackgroundC;
        })(background.BackgroundV);
        background.BackgroundC = BackgroundC;
        BackgroundC.prototype.__class__ = "view.background.BackgroundC"; //end export
    })(background = view.background || (view.background = {}));
})(view || (view = {})); //end module
