/**
 * Created by jgg on 2015/1/23.
 */
module manage
{
    export class DataModuleManage
    {
        private static _instance:DataModuleManage = null;
        private _dataDic:Object = null;

        public constructor(){

        }


        public start():void{
            this._dataDic = {};
            this.addDataModule(config.DataModuleKey.M_DATA_MAP,new data.MapData());
        }

        /**
         * 添加data 模块到存储列表
         * @param dataKey
         * @param dataModule
         */
        public addDataModule(dataKey:string,dataModule:i.IDataModule):void{
            this._dataDic[dataKey] = dataModule;
        }



        public getDataModule(dataKey:string):i.IDataModule{
                return this._dataDic[dataKey];
        }



        public removeData(dataKey:string):void{
            if(this._dataDic[dataKey] != null || this._dataDic[dataKey]!= undefined){
                this._dataDic[dataKey].destroy();
                delete this._dataDic[dataKey];
            }
        }



        public static instance():DataModuleManage{
            this._instance = this._instance==null? new DataModuleManage():this._instance;
            return this._instance;
        }





    }//end export

}//end manage