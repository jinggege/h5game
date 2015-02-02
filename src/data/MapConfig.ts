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
        public static A_TYPE_T_3:string = "T_3";
        public static A_TYPE_T_4:string = "T_4";

        public static A_TYPE_Z_1:string = "Z_1";
        public static A_TYPE_Z_2:string = "Z_2";

        public static A_TYPE_YI_1:string = "YI_1";
        public static A_TYPE_YI_2:string = "YI_2";


        private _blockMapTian:Array<any> = null;
        private _blockMapT_1:Array<any>  = null;
        private _blockMapT_2:Array<any>  = null;
        private _blockMapT_3:Array<any>  = null;
        private _blockMapT_4:Array<any>  = null;

        private _blockMapZ_1:Array<any> = null;
        private _blockMapZ_2:Array<any> = null;


        public constructor(){

        }



        public getBlockMapByType(blocyType:string):any{
            switch (blocyType){
                case data.MapConfig.A_TYPE_田:
                    return this.blockMapTian();
                    break;
                case data.MapConfig.A_TYPE_T_1:
                    return this.blockMapT_1();
                    break;
                case data.MapConfig.A_TYPE_T_2:
                    return this.blockMapT_2();
                    break;
                case data.MapConfig.A_TYPE_T_3:
                    return this.blockMapT_3();
                    break;
                case data.MapConfig.A_TYPE_T_4:
                    return this.blockMapT_4();
                    break;

                case data.MapConfig.A_TYPE_Z_1:
                    return this._blockMapZ_1;
                    break;
                case data.MapConfig.A_TYPE_Z_2:
                    return this._blockMapZ_2;
                    break;


            }

            return null;
        }


        private blockMapTian():any{
            if(this._blockMapTian != null)
            {
                return this._blockMapTian;
            }

            this._blockMapTian = [];
            this._blockMapTian.push([this.getPoint(0,0,1), this.getPoint(0,1,1)]);
            this._blockMapTian.push([this.getPoint(1,0,1), this.getPoint(1,1,1)]);
            return this._blockMapTian;
        }

        /**
         *  E
         * EEE
         * @returns {Array<Array>}
         */
        private blockMapT_1():any{
            if(this._blockMapT_1 != null)
            {
                return this._blockMapT_1;
            }

            this._blockMapT_1 = [];
            this._blockMapT_1.push([this.getPoint(0,0,0), this.getPoint(0,1,1),this.getPoint(0,2,0)]);
            this._blockMapT_1.push([this.getPoint(1,0,1), this.getPoint(1,1,1),this.getPoint(1,2,1)]);
            return this._blockMapT_1;
        }

        /**
         *E
         *EE
         *E
         * @returns {Array<Array>}
         */

        private blockMapT_2():any{
            if(this._blockMapT_2 != null)
            {
                return this._blockMapT_2;
            }

            this._blockMapT_2 = [];
            this._blockMapT_2.push([this.getPoint(0,0,1), this.getPoint(0,1,0)]);
            this._blockMapT_2.push([this.getPoint(1,0,1), this.getPoint(1,1,1)]);
            this._blockMapT_2.push([this.getPoint(2,0,1), this.getPoint(2,1,0)]);
            return this._blockMapT_2;
        }


        /**
         * EEE
         *  E
         * @returns {Array<Array>}
         */
        private blockMapT_3():any{
            if(this._blockMapT_3 != null)
            {
                return this._blockMapT_3;
            }

            this._blockMapT_3 = [];
            this._blockMapT_3.push([this.getPoint(0,0,1), this.getPoint(0,1,1),this.getPoint(0,2,1)]);
            this._blockMapT_3.push([this.getPoint(1,0,0), this.getPoint(1,1,1),this.getPoint(1,2,0)]);
            return this._blockMapT_3;
        }


        /**
         *  E
         * EE
         *  E
         * @returns {Array<Array>}
         */

        private blockMapT_4():any{
            if(this._blockMapT_4 != null)
            {
                return this._blockMapT_4;
            }

            this._blockMapT_4 = [];
            this._blockMapT_4.push([this.getPoint(0,0,0), this.getPoint(0,1,1)]);
            this._blockMapT_4.push([this.getPoint(1,0,1), this.getPoint(1,1,1)]);
            this._blockMapT_4.push([this.getPoint(2,0,0), this.getPoint(2,1,1)]);
            return this._blockMapT_4;
        }

        /**
         * EE
         *  E
         *  EE
         * @returns {any}
         */

        private blockMapZ_1():any{

            if(this._blockMapZ_1 !=null){
                return this._blockMapZ_1;
            }

            this._blockMapZ_1 = [];
            this._blockMapZ_1.push([this.getPoint(0,0,1), this.getPoint(0,1,1), this.getPoint(0,2,0),]);
            this._blockMapZ_1.push([this.getPoint(1,0,0), this.getPoint(1,1,1), this.getPoint(1,2,0),]);
            this._blockMapZ_1.push([this.getPoint(2,0,0), this.getPoint(2,1,1), this.getPoint(2,2,1),]);

            return null;

        }

        /**
         *  E
         *EEE
         *E
         *
         * @returns {any}
         */

        private blockMapZ_2():any{

            if(this._blockMapZ_2 !=null){
                return this._blockMapZ_2;
            }

            this._blockMapZ_2 = [];
            this._blockMapZ_2.push([this.getPoint(0,0,0), this.getPoint(0,1,0), this.getPoint(0,2,1),]);
            this._blockMapZ_2.push([this.getPoint(1,0,1), this.getPoint(1,1,1), this.getPoint(1,2,0),]);
            this._blockMapZ_2.push([this.getPoint(2,0,0), this.getPoint(2,1,1), this.getPoint(2,2,1),]);

            return null;

        }










        private getPoint(row:number,col:number,block:number):data.ABlockPoint{
            return new data.ABlockPoint(row,col,block);
        }



    }//end export

}//end module

