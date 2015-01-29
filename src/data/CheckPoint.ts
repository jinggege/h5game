/**
 * Created by jgg on 2015/1/29.
 */
module data
{
    export class CheckPoint
    {
        private _row:number = 0;
        private _col:number = 0;
        private _block:number = 0;

        public constructor(row:number,col:number,block:number){
            this._row   = row;
            this._col   = col;
            this._block = block;
        }


        public getRow():number{
            return this._row;
        }

        public getCol():number{
            return this._col;
        }

        public getBlock():number{
            return this._block;
        }



    }//end export

}//end module