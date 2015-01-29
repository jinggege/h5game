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
    var controlbar;
    (function (controlbar) {
        var ContrilBarV = (function (_super) {
            __extends(ContrilBarV, _super);
            function ContrilBarV() {
                _super.call(this);
                this._btnWidth = 50;
                this.initView();
            }
            ContrilBarV.prototype.initView = function () {
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
                this._btnLeft.touchEnabled = this._btnRight.touchEnabled = true;
                this._btnDown.touchEnabled = this._btnTurn.touchEnabled = true;
            };
            ContrilBarV.prototype.btnLeft = function () {
                return this._btnLeft;
            };
            ContrilBarV.prototype.btnRight = function () {
                return this._btnRight;
            };
            ContrilBarV.prototype.btnTurn = function () {
                return this._btnTurn;
            };
            ContrilBarV.prototype.btnDown = function () {
                return this._btnDown;
            };
            return ContrilBarV;
        })(egret.Sprite);
        controlbar.ContrilBarV = ContrilBarV; //end export
    })(controlbar = view.controlbar || (view.controlbar = {}));
})(view || (view = {})); //end module
//# sourceMappingURL=ContrilBarV.js.map