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
        private _mapData:data.MapData;
        private _mapDic:Object;
        public constructor(){
            super();

            this._mapData = <data.MapData>(manage.DataModuleManage.instance().getDataModule(config.DataModuleKey.M_DATA_MAP));
            this. _mapDic = this._mapData.getMapData();
            if(this._mapDic == null){
                this._mapData.creatData();
                this._mapDic = this._mapData.getMapData();
            }


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
                    block = new Block(this._mapDic[i.toString()][j]);
                    this._blockDic[i.toString()+j] = block;
                    this.addChild(block);
                }
            }
        }

        get mapData():data.MapData{
            return this._mapData;
        }

        get mapDic():Object{
            return this._mapDic;
        }

        get blockDic():Object{
            return this._blockDic;
        }
    }
}