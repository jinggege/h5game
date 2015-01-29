/**
 * Created by jgg on 2015/1/15.
 * 加载管理器
 */
module manage
{
    export class LoadManage{


        private  static  _instance:manage.LoadManage;

        public constructor(){
        }

        public start():void{
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.configCompleteHandler,this);
            RES.loadConfig("resource/resource.json","resource/")
        }

        private configCompleteHandler(event:RES.ResourceEvent):void{

            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.configCompleteHandler,this);

            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadGroupCompleteHandler,this)
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.loadGroupProgressHandler,this);
            RES.loadGroup(config.ResKey.RES_GROUP_PROLOAD);
        }


        /**
         *加载完成
         * @param event
         */
        private loadGroupCompleteHandler(event:RES.ResourceEvent):void{
            manage.EventManage.instance().dispatcher(mevent.EventType.N_LOAD_COMPLETE,event.groupName)
        }


        /**
         *加载进度
         * @param event
         */
        private loadGroupProgressHandler(event:RES.ResourceEvent):void{


        }

        /**
         * @param resName
         * @returns {any}
         */
        public getTextureByName(resName:string):egret.Texture{
            return RES.getRes(resName);
        }



        public  static instance():LoadManage{
            this._instance = this._instance == null? new LoadManage():this._instance;
            return this._instance;

        }



    }//end export

}//end module