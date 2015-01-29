/**
 * Created by xushuwei on 15/1/27.
 */
module view.map
{
    export class MapC extends MapV implements i.IUIControl
    {
        private _mapData:data.MapData;
        private _mapDic:Object;
        public constructor(){
            super();
            this.init();
        }

        public init():void{

        }

        public open():void{
            this._mapData = <data.MapData>(manage.DataModuleManage.instance().getDataModule(config.DataModuleKey.M_DATA_MAP));
            this. _mapDic = this._mapData.getMapData();
            if(this._mapDic == null){
                this._mapData.creatData();
                this._mapDic = this._mapData.getMapData();
            }

            this.addEvent();
        }

        private addEvent():void{

            manage.EventManage.instance().addListener(mevent.EventType.N_CHANGE_DIRECTION,this.changeDirctionHandler);

        }


        private changeDirctionHandler(event:mevent.NoticeData):void{

            util.Console.log([event.data]);
            switch (event.data){

                case config.GameConfig.DIR_LEFT:

                    break;
                case config.GameConfig.DIR_RIGT:

                    break;
                case config.GameConfig.DIR_TURN:

                    break;
                case config.GameConfig.DIR_DOWN:

                    break;
            }
        }





        public getLevel():string{
            return config.UIKey.UI_LEVEL_2;
        }

        public close():void{

        }

        public destroy():void{

        }
    }
}