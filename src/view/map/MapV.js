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
        var MapV = (function (_super) {
            __extends(MapV, _super);
            function MapV() {
                _super.call(this);
                this._blockDic = new Object();
                this._row = config.GameConfig.STAGE_MAIN_HEIGHT / config.GameConfig.BLOCK_HIEGHT;
                this._row = this._row > config.GameConfig.MAP_MAX_ROW ? config.GameConfig.MAP_MAX_ROW : this._row;
                this._col = config.GameConfig.STAGE_MAIN_WIDTH / config.GameConfig.BLOCK_WIDTH;
                this._col = this._col > config.GameConfig.MAP_MAX_COL ? config.GameConfig.MAP_MAX_COL : this._col;
                this.initView();
            }
            MapV.prototype.initView = function () {
                var i = 0;
                var j = 0;
                var block = null;
                for (i = 0; i < this._row; i++) {
                    for (j = 0; j < this._col; j++) {
                        block = new Block(i, j, 1);
                        this._blockDic[i.toString() + j] = block;
                        this.addChild(block);
                    }
                }
            };
            return MapV;
        })(egret.Sprite);
        map.MapV = MapV;
    })(map = view.map || (view.map = {}));
})(view || (view = {}));
//# sourceMappingURL=MapV.js.map