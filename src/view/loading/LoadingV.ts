/**
 * Created by jgg on 2015/1/23.
 */
module view.loading
{
    export class LoadingV extends egret.Sprite implements i.IView
    {
        private _tf:egret.TextField;
        public constructor(){
            super();
            this.initView();
        }


        public initView():void{
            this._tf = new egret.TextField();
            this._tf.width = 300;
            this._tf.height = 200;
            this._tf.textAlign = "center";
            this._tf.text = "Loading View open";
            this.addChild(this._tf)
        }


        public label():egret.TextField{

            return this._tf;
        }




    }//end export

}//end module