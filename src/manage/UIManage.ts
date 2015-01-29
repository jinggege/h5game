/**
 * Created by jgg on 2015/1/14.
 * UI  管理类
 * 功能：统一打开 关闭 销毁  获取
 * 所有VIEW 必须实现i.IUI 接口
 */
module manage
{
    export class UIManage
    {
        private static _instance:UIManage;

        private  _mainLayer:egret.DisplayObjectContainer;

        private _uiDic    = new Object();
        private _levelDic = new Object();


        public constructor(){

        }

        /**
         * 启动启动器
         * @param layer
         */
        public start(layer:egret.DisplayObjectContainer):void{

            this._mainLayer = layer;

            this.creatLevelLayer(config.UIKey.UI_LEVEL_1);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_2);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_2_1);
            this.creatLevelLayer(config.UIKey.UI_LEVEL_3);

           this.addUIToManage();
        }


        private addUIToManage(){
            this._uiDic[config.UIKey.UI_LOADING] = new view.loading.LoadingC();
            this._uiDic[config.UIKey.UI_BG]      = new view.background.BackgroundC();
            this._uiDic[config.UIKey.UI_CONTROL] = new view.controlbar.ControlBarC();
           this._uiDic[config.UIKey.UI_MAP]     = new view.map.MapC();

            manage.EventManage.instance().addListener(mevent.EventType.N_OPEN_UI,this.operateUiHandler)
        }


        public operateUiHandler(nData:mevent.NoticeData):void{

            switch (nData.type){

                case mevent.EventType.N_OPEN_UI:
                    manage.UIManage.instance().openUI(nData.data);
                    break;

                case mevent.EventType.N_CLOSE_UI:
                    manage.UIManage.instance().closeUI(nData.data);
                    break;
            }//end switch
        }


        /**
         * 打开UI
         * @param uikey :UI唯一标识
         *
         */
        public openUI(uikey:string):void{

            var ui:i.IUIControl = this._uiDic[uikey];

            if(ui != undefined){
                ui.open();
                //var panel:egret.Sprite = <egret.Sprite>ui;
                var panel:egret.Sprite = this._uiDic[uikey];
                this.getLayer(ui.getLevel()).addChild(panel);

            }else{

                util.Console.log([uikey+" 未被注册!"]);
            }//end else

        }


        /**
         * 获取UI 实例
         * @param uikey
         * @returns {IUIControl}
         */
        public getUIByKey(uikey:string):i.IUIControl{
            return this._uiDic[uikey];
        }


        public closeUI(uikey:string):void{
            var ui:i.IUIControl = this._uiDic[uikey];

            if(ui != undefined){
                ui.close();
                //var panel:egret.Sprite = <egret.Sprite>ui;
                var panel:egret.Sprite = this._uiDic[uikey];

                if(this._mainLayer.contains(panel)){
                    this.getLayer(ui.getLevel()).removeChild(panel);
                }

            }else{

                util.Console.log(["当前关闭的UI ["+uikey+"]不存在!"]);
            }//end else

        }


        /**
         * 创建层级
         * @param level  层级名称
         */
        private  creatLevelLayer(level:string):void{
            var layer:egret.Sprite = new egret.Sprite();
            layer.name = level;
            this._mainLayer.addChild(layer);
            this._levelDic[level] = layer;
        }


        private getLayer(name:string):egret.Sprite{

            var layer:egret.Sprite = this._levelDic[name];

            if(layer == undefined || layer == null){
                util.Console.log(["层级:"+name+" 未被创建!"])
            }

            return layer;
        }




        public static instance():UIManage{
           this. _instance = this._instance==null? new UIManage(): this._instance;
            return this._instance;

        }


    }//end export



}//end module