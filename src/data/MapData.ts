/**
 * Created by jgg on 2015/1/26.
 */
module data
{
    export class MapData implements i.IDataModule
    {

        /**方块类型*/
        public static A_TYPE_田:string = "田";

        private _mapDic:Object;

        private  _map_tian:any = null;
        /**当前活动的块 占有的列数*/
        private  _currOwnCol:number = 3;

        private _blockConfig:data.MapConfig;

        private _blockList:Array<string> = null;



        public constructor(){
            this._blockConfig = new data.MapConfig();
            this._blockList   = new Array<string>();

            this._blockList.push(data.MapConfig.A_TYPE_田);

            this._blockList.push(data.MapConfig.A_TYPE_T_1);
            this._blockList.push(data.MapConfig.A_TYPE_T_2);
            this._blockList.push(data.MapConfig.A_TYPE_T_3);
            this._blockList.push(data.MapConfig.A_TYPE_T_4);

            this._blockList.push(data.MapConfig.A_TYPE_Z_1);
            this._blockList.push(data.MapConfig.A_TYPE_Z_2);
        }


        public creatData():void{

            this._mapDic = {};

            var blockInfo:data.BlockInfo;

            for(var row:number = 0; row<config.GameConfig.MAP_MAX_ROW; row++){
                var rowArr:Array<data.BlockInfo> = new Array<data.BlockInfo>();

                for(var col:number=0; col<config.GameConfig.MAP_MAX_COL;col++){
                    blockInfo = new data.BlockInfo(row,col,0);
                    rowArr.push(blockInfo);
                }

                this._mapDic[row.toString()] = rowArr;
            }

        }


        /**
         * 获取地图数据
         * @returns {Object}
         */
        public getMapData():Object{
            return this._mapDic;
        }


        /**
         *获取阻挡信息
         * @param row
         * @param col
         * @returns {BlockInfo}
         */
        public getBlockInfo(row:number,col:number):data.BlockInfo{
            var arr:Array<data.BlockInfo> = this._mapDic[row.toString()];
            if(arr ==null || arr ==undefined){
                util.Console.log(["map data 未被初始化!"]);
                return null;
            }

            return arr[col];
        }


        /**
         * 设置阻挡
         * @param row
         * @param col
         * @param block
         */
        public setBlockToMap(row:number,col:number,block:number):void{
           this._mapDic[row][col]["setBlock"](block);
        }


        /**
         * 创建Active Block
         * 创建不同方块 接口
         * @returns {data.ActiveBlockInfo}
         */

        public creatActiveBlock():data.ActiveBlockInfo{

            var randomIndex:number = Math.floor(this._blockList.length * Math.random());
            var blockType:string =this._blockList[randomIndex];

            var blockData:any = this.getActiceMapData(blockType);
            this._currOwnCol = blockData[0].length;

            var aBlock:data.ActiveBlockInfo = new data.ActiveBlockInfo();
            aBlock.setActiveBlockType(blockType);
            aBlock.setABlockMap(blockData);
            var randomCol:number = Math.floor((config.GameConfig.MAP_MAX_COL - this._currOwnCol) *Math.random());
            var randomX:number  = randomCol * config.GameConfig.BLOCK_WIDTH;
            aBlock.setXY(randomX,0);
            return aBlock;
        }


        public changeBlock(aBlock:data.ActiveBlockInfo,lastAtype:string):void{
            aBlock.setActiveBlockType(lastAtype);
           // aBlock.setTexture();
        }

        /**
         * 获取ActiveBlock 地图信息
         * @param aType
         * @returns {*}
         */
        private getActiceMapData(aType:string):any{
            return this._blockConfig.getBlockMapByType(aType);
        }




        public destroy():void{
            util.Console.log(["map data destroy"]);

        }


    }//end export

}//end module