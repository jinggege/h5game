var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by jgg on 2015/1/15.
 *控制区域
 */
var view;
(function (view) {
    var controlbar;
    (function (controlbar) {
        var ControlBarC = (function (_super) {
            __extends(ControlBarC, _super);
            function ControlBarC() {
                _super.call(this);
                this.init();
            }
            ControlBarC.prototype.init = function () {
            };
            ControlBarC.prototype.open = function () {
                if (_super.prototype.btnDown.texture == undefined) {
                    _super.prototype.btnLeft.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_LEFT);
                    _super.prototype.btnRight.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_RIGHT);
                    _super.prototype.btnTurn.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_TURN);
                    _super.prototype.btnDown.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_DOWN);
                    _super.prototype.btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftHandler, this);
                    _super.prototype.btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightHandler, this);
                    _super.prototype.btnTurn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turnHandler, this);
                    _super.prototype.btnDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.downHandler, this);
                }
            };
            ControlBarC.prototype.leftHandler = function (evnet) {
                console.log("left");
            };
            ControlBarC.prototype.rightHandler = function (evnet) {
                console.log("right");
            };
            ControlBarC.prototype.turnHandler = function (evnet) {
                console.log("turn");
            };
            ControlBarC.prototype.downHandler = function (evnet) {
                console.log("down");
            };
            ControlBarC.prototype.getLevel = function () {
                return config.UIKey.UI_LEVEL_2_1;
            };
            ControlBarC.prototype.close = function () {
            };
            ControlBarC.prototype.destroy = function () {
            };
            return ControlBarC;
        })(view.ContrilBarV);
        controlbar.ControlBarC = ControlBarC;
        ControlBarC.prototype.__class__ = "view.controlbar.ControlBarC"; //end export
    })(controlbar = view.controlbar || (view.controlbar = {}));
})(view || (view = {})); //end module
