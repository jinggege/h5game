/**
 * Created by jgg on 2015/1/22.
 * 映射视觉元素 为子类提供存取接口
 */
module view.background
{
    export class BackgroundV extends egret.Sprite implements i.IView
    {
        private _bgImg:egret.Bitmap;

        private _btnStart:egret.Bitmap;

        public constructor(){
            super();
            this.initView();
        }


        public initView():void{
            this._bgImg = new egret.Bitmap();
            this.addChild(this._bgImg);

            this._btnStart = new egret.Bitmap();
            this.addChild(this._btnStart);
            this._btnStart.touchEnabled = true;

            this._btnStart.x = config.GameConfig.STAGE_MAIN_WIDTH/2;
            this._btnStart.y = config.GameConfig.STAGE_MAIN_HEIGHT/2;
        }


        public getBgimg():egret.Bitmap{
            return this._bgImg;
        }


        public getBtnStart():egret.Bitmap{
            return this._btnStart;

        }



    }// end export

}//end module