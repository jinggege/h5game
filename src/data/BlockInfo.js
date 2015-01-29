/**
 * Created by jgg on 2015/1/27.
 */
var data;
(function (data) {
    var BlockInfo = (function () {
        function BlockInfo(row, col, block) {
            this._row = -1;
            this._col = -1;
            this._block = 0;
            this._row = row;
            this._col = col;
            this._block = block;
        }
        BlockInfo.prototype.getRow = function () {
            return this._row;
        };
        BlockInfo.prototype.getCol = function () {
            return this._col;
        };
        BlockInfo.prototype.setBlock = function (value) {
            this._block = value;
        };
        BlockInfo.prototype.getBlock = function () {
            return this._block;
        };
        /**
         *
         * @returns {number}
         */
        BlockInfo.prototype.width = function () {
            return config.GameConfig.BLOCK_WIDTH;
        };
        BlockInfo.prototype.height = function () {
            return config.GameConfig.BLOCK_HIEGHT;
        };
        return BlockInfo;
    })();
    data.BlockInfo = BlockInfo; //end export
})(data || (data = {})); //end module
//# sourceMappingURL=BlockInfo.js.map