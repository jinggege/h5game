var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by xushuwei on 15/1/27.
 */
var view;
(function (view) {
    var map;
    (function (map) {
        var MapC = (function (_super) {
            __extends(MapC, _super);
            function MapC() {
                _super.call(this);
                this.init();
            }
            MapC.prototype.init = function () {
            };
            MapC.prototype.open = function () {
                this._mapData = (manage.DataModuleManage.instance().getDataModule(config.DataModuleKey.M_DATA_MAP));
                this._mapDic = this._mapData.getMapData();
                if (this._mapDic == null) {
                    this._mapData.creatData();
                    this._mapDic = this._mapData.getMapData();
                }
                this.addEvent();
            };
            MapC.prototype.addEvent = function () {
                manage.EventManage.instance().addListener(mevent.EventType.N_CHANGE_DIRECTION, this.changeDirctionHandler);
            };
            MapC.prototype.changeDirctionHandler = function (event) {
                util.Console.log([event.data]);
                switch (event.data) {
                    case config.GameConfig.DIR_LEFT:
                        break;
                    case config.GameConfig.DIR_RIGT:
                        break;
                    case config.GameConfig.DIR_TURN:
                        break;
                    case config.GameConfig.DIR_DOWN:
                        break;
                }
            };
            MapC.prototype.getLevel = function () {
                return config.UIKey.UI_LEVEL_2;
            };
            MapC.prototype.close = function () {
            };
            MapC.prototype.destroy = function () {
            };
            return MapC;
        })(MapV);
        map.MapC = MapC;
    })(map = view.map || (view.map = {}));
})(view || (view = {}));
//# sourceMappingURL=MapC.js.map