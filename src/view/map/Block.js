var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by xushuwei on 15/1/28.
 */
var view;
(function (view) {
    var map;
    (function (map) {
        var Block = (function (_super) {
            __extends(Block, _super);
            function Block(row, col, block) {
                _super.call(this);
                this._color = 0xcccccc;
                this._lineColor = 0xffffff;
                this._al = 1;
                this._blockSkin = new egret.Bitmap();
                this._blockInfo = new data.BlockInfo(row, col, block);
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            }
            Block.prototype.getBlockInfo = function () {
                return this._blockInfo;
            };
            Block.prototype.setBlockInfo = function (value) {
                this._blockInfo = value;
            };
            Block.prototype.getColor = function () {
                return this._color;
            };
            Block.prototype.setColor = function (value) {
                this._color = value;
            };
            Block.prototype.onAddToStage = function () {
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
                this.createChild();
                this.drawBackGround();
            };
            Block.prototype.createChild = function () {
                if (this._blockInfo.getBlock() == 1) {
                    this.addChild(this._blockSkin);
                    this._blockSkin.width = config.GameConfig.BLOCK_WIDTH;
                    this._blockSkin.height = config.GameConfig.BLOCK_HIEGHT;
                    this._blockSkin.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BLOCK_SKIN);
                }
                this.x = this._blockInfo.getCol() * config.GameConfig.BLOCK_WIDTH;
                this.y = this._blockInfo.getRow() * config.GameConfig.BLOCK_HIEGHT;
            };
            Block.prototype.drawBackGround = function () {
                this.graphics.lineStyle(1, this._lineColor);
                this.graphics.beginFill(this._color, this._al);
                this.graphics.drawRect(0, 0, config.GameConfig.BLOCK_WIDTH, config.GameConfig.BLOCK_HIEGHT);
                this.graphics.endFill();
            };
            Block.prototype.destroy = function () {
            };
            return Block;
        })(egret.Sprite);
        map.Block = Block;
    })(map = view.map || (view.map = {}));
})(view || (view = {}));
//# sourceMappingURL=Block.js.map