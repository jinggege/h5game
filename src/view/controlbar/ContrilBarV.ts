/**
 * Created by jgg on 2015/1/23.
 */
module view.controlbar
{
    export class ContrilBarV extends egret.Sprite implements i.IView
    {
        private _btnLeft:egret.Bitmap;
        private _btnRight:egret.Bitmap;
        private _btnTurn:egret.Bitmap;
        private _btnDown:egret.Bitmap;

        private _btnLayer:egret.Sprite;

        private _btnWidth:number = 50;

        public constructor(){
            super();

            this.initView();
        }


        public initView():void{
            this._btnLeft  = new egret.Bitmap();
            this._btnRight = new egret.Bitmap();
            this._btnTurn  = new egret.Bitmap();
            this._btnDown  = new egret.Bitmap();

            this._btnLayer = new egret.Sprite();

            this._btnLayer.addChild(this._btnLeft);
            this._btnLayer.addChild(this._btnRight);
            this._btnLayer.addChild(this._btnTurn);
            this._btnLayer.addChild(this._btnDown);

            this.addChild(this._btnLayer);

            this._btnLeft.width  = this._btnLeft.height  = this._btnWidth;
            this._btnRight.width = this._btnRight.height = this._btnWidth;
            this._btnTurn.width  = this._btnTurn.height  = this._btnWidth;
            this._btnDown.width  = this._btnDown.height  = this._btnWidth;

            var btnY:number = config.GameConfig.STAGE_MAIN_HEIGHT - this._btnLeft.height;
            this._btnLayer.y = btnY;

            this._btnRight.x = this._btnLeft.x+this._btnLeft.width;
            this._btnTurn.x  = this._btnRight.x+this._btnRight.width;
            this._btnDown.x  = this._btnTurn.x+this._btnTurn.width;


            this._btnLeft.touchEnabled = this._btnRight.touchEnabled = true;
            this._btnDown.touchEnabled = this._btnTurn.touchEnabled = true;

        }

        public btnLeft():egret.Bitmap{
            return this._btnLeft;
        }

        public btnRight():egret.Bitmap{

            return this._btnRight;
        }


        public btnTurn():egret.Bitmap{

            return this._btnTurn;
        }

       public  btnDown():egret.Bitmap{

            return this._btnDown;
        }








    }//end export

}//end module