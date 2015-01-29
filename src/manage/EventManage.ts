/**
 * Created by jgg on 2015/1/22.
 * 消息配发中心
 */
module manage
{
    export class EventManage{

        private static _instance:EventManage = null;
        private _callbackDic:Object = {};
        public constructor(){

        }

        /**
         * 注册事件监听
         * @param noticeType：消息类型
         * @param callback：回调函数
         */
        public addListener(eventType:string,callback:Function):void{

            if(this._callbackDic[eventType] == null || this._callbackDic[eventType] == undefined){

                this._callbackDic[eventType] = [];
            }

            this._callbackDic[eventType].push(callback);
        }


        /**
         * 移除事件监听
         * @param eventType 事件类型
         * @param callback  回调函数
         */
        public removeList(eventType:string,callback:Function):void{
            var arr:Array<Function> = this._callbackDic[eventType];
            if(arr != undefined && arr != null){
                for(var i:number=0; i<arr.length; i++){

                    if(arr[i]==callback){
                        arr.splice(i,1);
                        return;
                    }
                }
            }

        }


        /**
         * 事件广播接口
         * @param noticeType : 消息类型
         * @param data：暑假
         */
        public dispatcher(evnetType:string,data:any = null):void{
            var nData:mevent.NoticeData = new mevent.NoticeData(evnetType,data);
            var arr:Array<Function>     = this._callbackDic[evnetType];

            if(arr != undefined && arr != null){
                for(var i:number=0; i<arr.length; i++){
                    arr[i].call(null,nData);

                }
            }

        }



        public static instance():EventManage{
            this._instance = this._instance==null? new EventManage() : this._instance;
            return this._instance;
        }



    }//end export

}//end manage