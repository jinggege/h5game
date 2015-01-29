/**
 * Created by jgg on 2015/1/28.
 */
module data{
    export class ABlockPoint{

        private _block:number = 0;
        private _row:number   = 0;
        private _col:number   = 0;
        private _img:egret.Bitmap;

        public constructor(row:number,col:number,block:number){

            this._row   = row;
            this._col   = col;
            this._block = block;
            this._img   = new egret.Bitmap();

            if(block==1){
                this.setTexture();
            }
        }



        public setX(value:number):void{
            this._img.x = value;

        }

        public setY(value:number):void{
            this._img.y = value;

        }


        public setXY(x:number,y:number):void{
            this._img.x = x;
            this._img.y = y;
        }


        public getX():number{
            return this._img.x;
        }


        public getY():number{

            return this._img.y;
        }

        public getBlock():number{
            return this._block;
        }

        public getImg():egret.Bitmap{
            return this._img;
        }

        public getWidth():number{

            return config.GameConfig.BLOCK_WIDTH;
        }

        public getHeight():number{
            return config.GameConfig.BLOCK_HIEGHT;
        }


        private setTexture():void{
            //this._img.texture = null;
        }



    }//end export

}//end module