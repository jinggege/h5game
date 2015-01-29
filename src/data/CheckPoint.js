/**
 * Created by jgg on 2015/1/29.
 */
var data;
(function (data) {
    var CheckPoint = (function () {
        function CheckPoint(row, col, block) {
            this._row = 0;
            this._col = 0;
            this._block = 0;
            this._row = row;
            this._col = col;
            this._block = block;
        }
        CheckPoint.prototype.getRow = function () {
            return this._row;
        };
        CheckPoint.prototype.getCol = function () {
            return this._col;
        };
        CheckPoint.prototype.getBlock = function () {
            return this._block;
        };
        return CheckPoint;
    })();
    data.CheckPoint = CheckPoint; //end export
})(data || (data = {})); //end module
//# sourceMappingURL=CheckPoint.js.map