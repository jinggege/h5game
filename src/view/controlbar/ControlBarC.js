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
                if (super.btnDown.call(this).texture == undefined) {
                    super.btnLeft.call(this).texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_LEFT);
                    super.btnRight.call(this).texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_RIGHT);
                    super.btnTurn.call(this).texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_TURN);
                    super.btnDown.call(this).texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_DOWN);
                    super.btnLeft.call(this).addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftHandler, this);
                    super.btnRight.call(this).addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightHandler, this);
                    super.btnTurn.call(this).addEventListener(egret.TouchEvent.TOUCH_TAP, this.turnHandler, this);
                    super.btnDown.call(this).addEventListener(egret.TouchEvent.TOUCH_TAP, this.downHandler, this);
                }
            };
            ControlBarC.prototype.leftHandler = function (evnet) {
                manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION, config.GameConfig.DIR_LEFT);
            };
            ControlBarC.prototype.rightHandler = function (evnet) {
                manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION, config.GameConfig.DIR_RIGT);
            };
            ControlBarC.prototype.turnHandler = function (evnet) {
                manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION, config.GameConfig.DIR_TURN);
            };
            ControlBarC.prototype.downHandler = function (evnet) {
                manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION, config.GameConfig.DIR_DOWN);
            };
            ControlBarC.prototype.getLevel = function () {
                return config.UIKey.UI_LEVEL_2_1;
            };
            ControlBarC.prototype.close = function () {
            };
            ControlBarC.prototype.destroy = function () {
            };
            return ControlBarC;
        })(view.controlbar.ContrilBarV);
        controlbar.ControlBarC = ControlBarC; //end export
    })(controlbar = view.controlbar || (view.controlbar = {}));
})(view || (view = {})); //end module
//# sourceMappingURL=ControlBarC.js.map