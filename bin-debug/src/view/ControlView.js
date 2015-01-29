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
    var ControlView = (function (_super) {
        __extends(ControlView, _super);
        function ControlView() {
            _super.call(this);
            this._btnWidth = 50;
            this.init();
        }
        ControlView.prototype.init = function () {
            this._btnLeft = new egret.Bitmap();
            this._btnRight = new egret.Bitmap();
            this._btnTurn = new egret.Bitmap();
            this._btnDown = new egret.Bitmap();
            this._btnLayer = new egret.Sprite();
            this._btnLayer.addChild(this._btnLeft);
            this._btnLayer.addChild(this._btnRight);
            this._btnLayer.addChild(this._btnTurn);
            this._btnLayer.addChild(this._btnDown);
            this.addChild(this._btnLayer);
            this._btnLeft.width = this._btnLeft.height = this._btnWidth;
            this._btnRight.width = this._btnRight.height = this._btnWidth;
            this._btnTurn.width = this._btnTurn.height = this._btnWidth;
            this._btnDown.width = this._btnDown.height = this._btnWidth;
            var btnY = config.GameConfig.STAGE_MAIN_HEIGHT - this._btnLeft.height;
            this._btnLayer.y = btnY;
            this._btnRight.x = this._btnLeft.x + this._btnLeft.width;
            this._btnTurn.x = this._btnRight.x + this._btnRight.width;
            this._btnDown.x = this._btnTurn.x + this._btnTurn.width;
            this._btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftHandler, this);
            this._btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightHandler, this);
            this._btnTurn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turnHandler, this);
            this._btnDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.downHandler, this);
            this._btnLeft.touchEnabled = this._btnRight.touchEnabled = true;
            this._btnDown.touchEnabled = this._btnTurn.touchEnabled = true;
        };
        ControlView.prototype.open = function () {
            if (this._btnDown.texture == undefined) {
                this._btnLeft.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_LEFT);
                this._btnRight.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_RIGHT);
                this._btnTurn.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_TURN);
                this._btnDown.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_DOWN);
            }
        };
        ControlView.prototype.leftHandler = function (evnet) {
            console.log("left");
        };
        ControlView.prototype.rightHandler = function (evnet) {
            console.log("right");
        };
        ControlView.prototype.turnHandler = function (evnet) {
            console.log("turn");
        };
        ControlView.prototype.downHandler = function (evnet) {
            console.log("down");
        };
        ControlView.prototype.close = function () {
        };
        ControlView.prototype.destroy = function () {
        };
        return ControlView;
    })(egret.Sprite);
    view.ControlView = ControlView;
    ControlView.prototype.__class__ = "view.ControlView"; //end export
})(view || (view = {})); //end module
