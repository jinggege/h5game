/**
 *入口文件
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Tetrie = (function (_super) {
    __extends(Tetrie, _super);
    function Tetrie() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHandler, this);
        util.Console.log(["V_2"]);
    }
    /**
     * 添加到舞台
     * @param event
     */
    Tetrie.prototype.addToStageHandler = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHandler, this);
        this._mainLayer = new egret.DisplayObjectContainer();
        this.stage.addChild(this._mainLayer);
        manage.EventManage.instance().addListener(mevent.EventType.N_LOAD_COMPLETE, this.preLoadComplete);
        manage.DataModuleManage.instance().start();
        manage.UIManage.instance().start(this._mainLayer);
        manage.LoadManage.instance().start();
    };
    /**
     * 预加载完毕后回调
     */
    Tetrie.prototype.preLoadComplete = function (data) {
        manage.EventManage.instance().dispatcher(mevent.EventType.N_OPEN_UI, config.UIKey.UI_BG);
    };
    return Tetrie;
})(egret.DisplayObjectContainer);
Tetrie.prototype.__class__ = "Tetrie";
