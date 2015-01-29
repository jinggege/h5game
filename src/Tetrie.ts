/**
 *入口文件
 */

class Tetrie extends egret.DisplayObjectContainer{

    /**层级:根*/
    private _mainLayer:egret.DisplayObjectContainer;



    public constructor(){

        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStageHandler,this);

        util.Console.log(["V_2"]);

    }


    /**
     * 添加到舞台
     * @param event
     */
    private addToStageHandler(event:egret.Event):void{
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addToStageHandler,this);
        this._mainLayer = new egret.DisplayObjectContainer();
        this.stage.addChild(this._mainLayer);

        manage.EventManage.instance().addListener(mevent.EventType.N_LOAD_COMPLETE,this.preLoadComplete)
        manage.DataModuleManage.instance().start();
        manage.UIManage.instance().start(this._mainLayer);
        manage.LoadManage.instance().start();
    }


    /**
     * 预加载完毕后回调
     */
    private preLoadComplete(data:mevent.NoticeData):void{

        manage.EventManage.instance().dispatcher(
                mevent.EventType.N_OPEN_UI,
                config.UIKey.UI_BG);

    }

}


