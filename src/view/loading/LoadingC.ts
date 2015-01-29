/**
 * Created by jgg on 2015/1/14.
 * loading UI
 */
module view.loading
{
    export class LoadingC extends LoadingV implements i.IUIControl
    {

        public constructor(){
            super();
            this.init();
        }


        public init():void{


        }

        public open():void{


        }


        public getLevel():string{
            return config.UIKey.UI_LEVEL_3;
        }



        public close():void{
            /*
            if(this.contains(super.label)){
                this.removeChild(super.label);
            }
            */

        }

        public destroy():void{


        }






    }//end export

}//end module