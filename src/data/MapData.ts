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

        public constructor(){
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
         * @returns {data.ActiveBlockInfo}
         */

        public creatActiveBlock():data.ActiveBlockInfo{

            var aBlock:data.ActiveBlockInfo = new data.ActiveBlockInfo();
            aBlock.setActiveBlockType(data.MapData.A_TYPE_田);
            aBlock.setABlockMap(this.getActiceMapData(data.MapData.A_TYPE_田));
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

            switch(aType){
                case data.MapData.A_TYPE_田 :
                    return this.mapTian;
                    break;

                default :
                    util.Console.log([aType+": 无此类型的地图!"]);
                    return null;
                    break;
            }


            return null;
        }


        private mapTian():Object{
            if(this._map_tian != null)
            {
                return this._map_tian;
            }

            this._map_tian = [];
            this._map_tian.push([this.getPoint(0,0,1), this.getPoint(0,1,1)]);
            this._map_tian.push([this.getPoint(1,0,1), this.getPoint(1,1,1)]);
            return this._map_tian;
        }


        private getPoint(row:number,col:number,block:number):data.ABlockPoint{
            return new data.ABlockPoint(row,col,block);
        }



        public destroy():void{
            util.Console.log(["map data destroy"]);

        }


    }//end export

}//end module