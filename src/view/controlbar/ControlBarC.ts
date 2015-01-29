/**
 * Created by jgg on 2015/1/15.
 *控制区域
 */
module view.controlbar
{
    export class ControlBarC extends  view.controlbar.ContrilBarV implements i.IUIControl
    {

        public constructor(){
            super();

            this.init();
        }


        public init():void{

        }

        public open():void{


            if(super.btnDown().texture == undefined){

                super.btnLeft().texture  = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_LEFT);
                super.btnRight().texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_RIGHT);
                super.btnTurn().texture  = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_TURN);
                super.btnDown().texture  = manage.LoadManage.instance().getTextureByName(config.ResKey.BTN_DOWN);

                super.btnLeft().addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftHandler,this);
                super.btnRight().addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightHandler,this);
                super.btnTurn().addEventListener(egret.TouchEvent.TOUCH_TAP,this.turnHandler,this);
                super.btnDown().addEventListener(egret.TouchEvent.TOUCH_TAP,this.downHandler,this);
            }

        }


        private leftHandler(evnet:egret.TouchEvent):void{
            manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION,config.GameConfig.DIR_LEFT);
        }

        private rightHandler(evnet:egret.TouchEvent):void{

            manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION,config.GameConfig.DIR_RIGT);
        }

        private turnHandler(evnet:egret.TouchEvent):void{
            manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION,config.GameConfig.DIR_TURN);

        }

        private downHandler(evnet:egret.TouchEvent):void{
            manage.EventManage.instance().dispatcher(mevent.EventType.N_CHANGE_DIRECTION,config.GameConfig.DIR_DOWN);
        }

        public getLevel():string{
            return config.UIKey.UI_LEVEL_2_1;
        }




        public  close():void{


        }

        public  destroy():void{


        }





    }//end export


}//end module