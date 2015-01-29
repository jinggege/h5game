/**
 * Created by xushuwei on 15/1/27.
 */
module view.map
{
    export class MapV extends egret.Sprite implements i.IView
    {
        private _blockDic = new Object();
        private _row:number;
        private _col:number;
        public constructor(){
            super();

            this._row = config.GameConfig.STAGE_MAIN_HEIGHT / config.GameConfig.BLOCK_HIEGHT;
            this._row = this._row > config.GameConfig.MAP_MAX_ROW ? config.GameConfig.MAP_MAX_ROW : this._row;

            this._col = config.GameConfig.STAGE_MAIN_WIDTH / config.GameConfig.BLOCK_WIDTH;
            this._col = this._col > config.GameConfig.MAP_MAX_COL ? config.GameConfig.MAP_MAX_COL : this._col;

            this.initView();
        }

        public initView():void{
            var i:number = 0;
            var j:number = 0;
            var block:Block = null;
            for(i = 0; i<this._row; i++){
                for( j = 0; j<this._col; j++){
                    block = new Block(i, j, 1);
                    this._blockDic[i.toString()+j] = block;
                    this.addChild(block);
                }
            }
        }
    }
}