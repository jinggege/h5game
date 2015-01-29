/**
 * Created by jgg on 2015/1/28.
 * 活动 Block 的数据结构
 */
var data;
(function (data) {
    var ActiveBlockInfo = (function () {
        function ActiveBlockInfo() {
            this._currentType = "";
            this._ablockMap = null;
            this._isDie = false;
            this._point = new egret.Point(0, 0);
            this._body = new egret.Sprite();
            this._checkList = new Array();
        }
        ActiveBlockInfo.prototype.setActiveBlockType = function (aType) {
            this._currentType = aType;
        };
        ActiveBlockInfo.prototype.getActiveBlockType = function () {
            return this._currentType;
        };
        ActiveBlockInfo.prototype.setABlockMap = function (value) {
            this._ablockMap = value;
            this.creatBlockMap();
        };
        ActiveBlockInfo.prototype.getX = function () {
            return this._body.x;
        };
        ActiveBlockInfo.prototype.getY = function () {
            return this._body.y;
        };
        ActiveBlockInfo.prototype.getWidth = function () {
            return this._ablockMap[0].length * config.GameConfig.BLOCK_WIDTH;
        };
        ActiveBlockInfo.prototype.getHeight = function () {
            return this._ablockMap.length * config.GameConfig.BLOCK_HIEGHT;
        };
        ActiveBlockInfo.prototype.getBody = function () {
            return this._body;
        };
        /**
         * 是否死亡
         * @param value
         */
        ActiveBlockInfo.prototype.setIsDie = function (value) {
            this._isDie = value;
        };
        ActiveBlockInfo.prototype.getIsDie = function () {
            return this._isDie;
        };
        ActiveBlockInfo.prototype.setXY = function (x, y) {
            this._body.x = x;
            this._body.y = y;
        };
        /**
         * 创建Active Block View
         */
        ActiveBlockInfo.prototype.creatBlockMap = function () {
            var arrPoint = null;
            var aPoint = null;
            for (var row = 0; row < this._ablockMap.length; row++) {
                arrPoint = this._ablockMap[row];
                for (var col = 0; col < arrPoint.length; col++) {
                    aPoint = arrPoint[col];
                    this._body.addChild(aPoint.getImg());
                    aPoint.setXY(row * aPoint.getWidth(), col * aPoint.getHeight());
                }
            }
        };
        ActiveBlockInfo.prototype.updata = function () {
            if (this._isDie)
                return;
        };
        /**
         * 全局坐标
         * @returns {Point}
         */
        ActiveBlockInfo.prototype.getGlobalPoint = function () {
            return this._point;
        };
        /**
         * 对映到大地图中的行数
         * @returns {number}
         */
        ActiveBlockInfo.prototype.getRowForGlobal = function () {
            return this.getX() / config.GameConfig.BLOCK_HIEGHT;
        };
        /**
         * 对映到大地图中的列数
         * @returns {number}
         */
        ActiveBlockInfo.prototype.getColForGlobal = function () {
            return this.getY() / config.GameConfig.BLOCK_WIDTH;
        };
        /**
         * 要检测的点
         * @returns {Array<data.CheckPoint>}
         */
        ActiveBlockInfo.prototype.getCheckList = function () {
            if (this._checkList.length != 0) {
                return this._checkList;
            }
            var arrPoint = null;
            var aPoint = null;
            var globalRow = 0;
            var globalCol = 0;
            for (var row = 0; row < this._ablockMap.length; row++) {
                globalRow = row + this.getRowForGlobal();
                arrPoint = this._ablockMap[row];
                for (var col = 0; col < arrPoint.length; col++) {
                    globalCol = col + this.getColForGlobal();
                    aPoint = arrPoint[col];
                    this._checkList.push(new data.CheckPoint(globalRow, globalCol, aPoint.getBlock()));
                }
            }
            return this._checkList;
        };
        ActiveBlockInfo.prototype.destroy = function () {
            //todo
        };
        return ActiveBlockInfo;
    })();
    data.ActiveBlockInfo = ActiveBlockInfo; //end export
})(data || (data = {})); //end module
//# sourceMappingURL=ActiveBlockInfo.js.map