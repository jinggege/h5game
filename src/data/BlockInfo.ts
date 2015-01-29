/**
 * Created by jgg on 2015/1/27.
 */
module data
{
    export class BlockInfo
    {

        private _row:number = -1;
        private _col:number = -1;
        private _block:number = 0;


        public constructor(row:number,col:number,block:number){
            this._row = row;
            this._col = col;
            this._block = block;
        }


        public getRow():number{
            return this._row;
        }

        public getCol():number{
            return this._col;
        }

        public setBlock(value:number):void{
            this._block = value;
        }

        public getBlock():number{

            return this._block;
        }


        /**
         * 
         * @returns {number}
         */
        public width():number{
            return config.GameConfig.BLOCK_WIDTH;
        }

        public height():number{
            return config.GameConfig.BLOCK_HIEGHT;
        }





    }//end export

}//end module