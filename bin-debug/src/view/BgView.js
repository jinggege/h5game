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
    var BgView = (function (_super) {
        __extends(BgView, _super);
        function BgView() {
            _super.call(this);
            this.init();
        }
        BgView.prototype.init = function () {
            this._bgImg = new egret.Bitmap();
            this.addChild(this._bgImg);
        };
        BgView.prototype.open = function () {
            if (this._texture == undefined) {
                this._texture = manage.LoadManage.instance().getTextureByName(config.ResKey.GAME_BG_NAME);
                util.Console.log([this._texture]);
                this._bgImg.texture = this._texture;
            }
        };
        BgView.prototype.close = function () {
        };
        BgView.prototype.destroy = function () {
        };
        return BgView;
    })(egret.Sprite);
    view.BgView = BgView;
    BgView.prototype.__class__ = "view.BgView"; //end export
})(view || (view = {})); //end module
