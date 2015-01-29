/**
 * Created by jgg on 2015/1/28.
 */
var data;
(function (data) {
    var ABlockPoint = (function () {
        function ABlockPoint(row, col, block) {
            this._block = 0;
            this._row = 0;
            this._col = 0;
            this._row = row;
            this._col = col;
            this._block = block;
            this._img = new egret.Bitmap();
            if (block == 1) {
                this.setTexture();
            }
        }
        ABlockPoint.prototype.setX = function (value) {
            this._img.x = value;
        };
        ABlockPoint.prototype.setY = function (value) {
            this._img.y = value;
        };
        ABlockPoint.prototype.setXY = function (x, y) {
            this._img.x = x;
            this._img.y = y;
        };
        ABlockPoint.prototype.getX = function () {
            return this._img.x;
        };
        ABlockPoint.prototype.getY = function () {
            return this._img.y;
        };
        ABlockPoint.prototype.getBlock = function () {
            return this._block;
        };
        ABlockPoint.prototype.getImg = function () {
            return this._img;
        };
        ABlockPoint.prototype.getWidth = function () {
            return config.GameConfig.BLOCK_WIDTH;
        };
        ABlockPoint.prototype.getHeight = function () {
            return config.GameConfig.BLOCK_HIEGHT;
        };
        ABlockPoint.prototype.setTexture = function () {
            this._img.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BLOCK_SKIN);
        };
        return ABlockPoint;
    })();
    data.ABlockPoint = ABlockPoint; //end export
})(data || (data = {})); //end module
//# sourceMappingURL=ABlockPoint.js.map