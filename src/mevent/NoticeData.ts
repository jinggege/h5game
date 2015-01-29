/**
 * Created by jgg on 2015/1/22.
 *
 */
module mevent
{
    export class NoticeData{

        private _noticeType:string;
        private _data:any;

        /**
         *
         * @param type  消息类型
         * @param data 消息具体数据
         */

        public constructor(type:string,data:any){
            this._noticeType = type;
            this._data       = data;
        }


        /**
         *事件类型
         * @returns {notice type}
         */
        get type():string{
            return this._noticeType;
        }

        /**
         *数据
         * @returns {notice data}
         */
        get data():any{

            return this._data;
        }


    }//end class

}//end module