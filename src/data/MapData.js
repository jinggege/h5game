/**
 * Created by jgg on 2015/1/26.
 */
var data;
(function (data) {
    var MapData = (function () {
        function MapData() {
            this._map_tian = null;
        }
        MapData.prototype.creatData = function () {
            this._mapDic = {};
            var blockInfo;
            for (var row = 0; row < config.GameConfig.MAP_MAX_ROW; row++) {
                var rowArr = new Array();
                for (var col = 0; col < config.GameConfig.MAP_MAX_COL; col++) {
                    blockInfo = new data.BlockInfo(row, col, 0);
                    rowArr.push(blockInfo);
                }
                this._mapDic[row.toString()] = rowArr;
            }
        };
        /**
         * 获取地图数据
         * @returns {Object}
         */
        MapData.prototype.getMapData = function () {
            return this._mapDic;
        };
        /**
         *获取阻挡信息
         * @param row
         * @param col
         * @returns {BlockInfo}
         */
        MapData.prototype.getBlockInfo = function (row, col) {
            var arr = this._mapDic[row.toString()];
            if (arr == null || arr == undefined) {
                util.Console.log(["map data 未被初始化!"]);
                return null;
            }
            return arr[col];
        };
        /**
         * 设置阻挡
         * @param row
         * @param col
         * @param block
         */
        MapData.prototype.setBlockToMap = function (row, col, block) {
            this._mapDic[row][col]["setBlock"](block);
        };
        /**
         * 创建Active Block
         * @returns {data.ActiveBlockInfo}
         */
        MapData.prototype.creatActiveBlock = function () {
            var aBlock = new data.ActiveBlockInfo();
            aBlock.setActiveBlockType(data.MapData.A_TYPE_田);
            aBlock.setABlockMap(this.getActiceMapData(data.MapData.A_TYPE_田));
            return aBlock;
        };
        MapData.prototype.changeBlock = function (aBlock, lastAtype) {
            aBlock.setActiveBlockType(lastAtype);
            // aBlock.setTexture();
        };
        /**
         * 获取ActiveBlock 地图信息
         * @param aType
         * @returns {*}
         */
        MapData.prototype.getActiceMapData = function (aType) {
            switch (aType) {
                case data.MapData.A_TYPE_田:
                    return this.mapTian;
                    break;
                default:
                    util.Console.log([aType + ": 无此类型的地图!"]);
                    return null;
                    break;
            }
            return null;
        };
        MapData.prototype.mapTian = function () {
            if (this._map_tian != null) {
                return this._map_tian;
            }
            this._map_tian = [];
            this._map_tian.push([this.getPoint(0, 0, 1), this.getPoint(0, 1, 1)]);
            this._map_tian.push([this.getPoint(1, 0, 1), this.getPoint(1, 1, 1)]);
            return this._map_tian;
        };
        MapData.prototype.getPoint = function (row, col, block) {
            return new data.ABlockPoint(row, col, block);
        };
        MapData.prototype.destroy = function () {
            util.Console.log(["map data destroy"]);
        };
        /**方块类型*/
        MapData.A_TYPE_田 = "田";
        return MapData;
    })();
    data.MapData = MapData; //end export
})(data || (data = {})); //end module
//# sourceMappingURL=MapData.js.map