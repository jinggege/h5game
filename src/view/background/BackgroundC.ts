/**
 * Created by jgg on 2015/1/15.
 */
module view.background{
    export class BackgroundC extends view.background.BackgroundV implements i.IUIControl
    {



        public constructor(){
            super();
            this.init();
        }

        public init():void{


        }


        public open():void{

            if(super.getBgimg().texture == undefined){

                super.getBgimg().texture = manage.LoadManage.instance().getTextureByName(config.ResKey.GAME_BG_NAME);
                super.getBtnStart().texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_OK);
                super.getBtnStart().addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickStartHandler,this)

            }

        }


        private clickStartHandler(event:egret.TouchEvent):void{

            super.getBtnStart().visible = false;

            manage.EventManage.instance().dispatcher(
                mevent.EventType.N_OPEN_UI,
                config.UIKey.UI_MAP);

            manage.EventManage.instance().dispatcher(
                mevent.EventType.N_OPEN_UI,
                config.UIKey.UI_CONTROL);
        }


        public getLevel():string{
            return config.UIKey.UI_LEVEL_1;
        }



        public  close():void{


        }

        public  destroy():void{


        }






    }//end export

}//end module