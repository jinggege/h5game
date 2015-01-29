/**
 * Created by jgg on 2015/1/14.
 * UI  管理类
 * 功能：统一打开 关闭 销毁  获取
 * 所有VIEW 必须实现i.IUI 接口
 */
var manage;
(function (manage) {
    var UIManage = (function () {
        function UIManage() {
            this._uiDic = new Object();
            this._levelDic = new Object();
        }
        /**
         * 启动启动器
         * @param layer
         */
        UIManage.prototype.start = function (layer) {
            this._mainLayer = layer;
            this.creatLevelLayer(config.UIKey.UI_LEVEL_1);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_2);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_2_1);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_3);
            this.addUIToManage();
        };
        UIManage.prototype.addUIToManage = function () {
            this._uiDic[config.UIKey.UI_LOADING] = new view.loading.LoadingC();
            this._uiDic[config.UIKey.UI_BG] = new view.background.BackgroundC();
            this._uiDic[config.UIKey.UI_CONTROL] = new view.controlbar.ControlBarC();
            this._uiDic[config.UIKey.UI_MAP] = new view.map.MapC();
            manage.EventManage.instance().addListener(mevent.EventType.N_OPEN_UI, this.operateUiHandler);
        };
        UIManage.prototype.operateUiHandler = function (nData) {
            switch (nData.type) {
                case mevent.EventType.N_OPEN_UI:
                    manage.UIManage.instance().openUI(nData.data);
                    break;
                case mevent.EventType.N_CLOSE_UI:
                    manage.UIManage.instance().closeUI(nData.data);
                    break;
            }
        };
        /**
         * 打开UI
         * @param uikey :UI唯一标识
         *
         */
        UIManage.prototype.openUI = function (uikey) {
            var ui = this._uiDic[uikey];
            if (ui != undefined) {
                ui.open();
                //var panel:egret.Sprite = <egret.Sprite>ui;
                var panel = this._uiDic[uikey];
                this.getLayer(ui.getLevel()).addChild(panel);
            }
            else {
                util.Console.log([uikey + " 未被注册!"]);
            } //end else
        };
        /**
         * 获取UI 实例
         * @param uikey
         * @returns {IUIControl}
         */
        UIManage.prototype.getUIByKey = function (uikey) {
            return this._uiDic[uikey];
        };
        UIManage.prototype.closeUI = function (uikey) {
            var ui = this._uiDic[uikey];
            if (ui != undefined) {
                ui.close();
                //var panel:egret.Sprite = <egret.Sprite>ui;
                var panel = this._uiDic[uikey];
                if (this._mainLayer.contains(panel)) {
                    this.getLayer(ui.getLevel()).removeChild(panel);
                }
            }
            else {
                util.Console.log(["当前关闭的UI [" + uikey + "]不存在!"]);
            } //end else
        };
        /**
         * 创建层级
         * @param level  层级名称
         */
        UIManage.prototype.creatLevelLayer = function (level) {
            var layer = new egret.Sprite();
            layer.name = level;
            this._mainLayer.addChild(layer);
            this._levelDic[level] = layer;
        };
        UIManage.prototype.getLayer = function (name) {
            var layer = this._levelDic[name];
            if (layer == undefined || layer == null) {
                util.Console.log(["层级:" + name + " 未被创建!"]);
            }
            return layer;
        };
        UIManage.instance = function () {
            this._instance = this._instance == null ? new UIManage() : this._instance;
            return this._instance;
        };
        return UIManage;
    })();
    manage.UIManage = UIManage; //end export
})(manage || (manage = {})); //end module
//# sourceMappingURL=UIManage.js.map