/**
 * Created by jgg on 2015/1/30.
 */
module data
{
    export class MapConfig
    {

        /**方块类型*/
        public static A_TYPE_田:string  = "田";
        public static A_TYPE_T_1:string = "T_1";
        public static A_TYPE_T_2:string = "T_2";

        private _blockMapTian:Array<Array> =null;
        private _blockMapT_1:Array<Array>  = null;

        public constructor(){

        }



        public getBlockMapByType(blocyType:string):Array{
            switch (blocyType){
                case data.MapConfig.A_TYPE_田:
                    return this.blockMapTian();
                    break;
                case data.MapConfig.A_TYPE_T_1:
                    return this.blockMapT_1();
                    break;
            }

            return null;
        }


        private blockMapTian():Array{
            if(this._blockMapTian != null)
            {
                return this._blockMapTian;
            }

            this._blockMapTian = [];
            this._blockMapTian.push([this.getPoint(0,0,1), this.getPoint(0,1,1)]);
            this._blockMapTian.push([this.getPoint(1,0,1), this.getPoint(1,1,1)]);
            return this._blockMapTian;
        }


        private blockMapT_1():Array{
            if(this._blockMapT_1 != null)
            {
                return this._blockMapT_1;
            }

            this._blockMapT_1 = [];
            this._blockMapT_1.push([this.getPoint(0,0,0), this.getPoint(0,1,1),this.getPoint(0,2,0)]);
            this._blockMapT_1.push([this.getPoint(1,0,1), this.getPoint(1,1,1),this.getPoint(1,2,1)]);
            return this._blockMapT_1;
        }

        private blockMapT_2():Array{
            //todo
            return null;
        }



        private getPoint(row:number,col:number,block:number):data.ABlockPoint{
            return new data.ABlockPoint(row,col,block);
        }



    }//end export

}//end module

