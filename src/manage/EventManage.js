/**
 * Created by jgg on 2015/1/22.
 * 消息配发中心
 */
var manage;
(function (manage) {
    var EventManage = (function () {
        function EventManage() {
            this._callbackDic = {};
        }
        /**
         * 注册事件监听
         * @param noticeType：消息类型
         * @param callback：回调函数
         */
        EventManage.prototype.addListener = function (eventType, callback) {
            if (this._callbackDic[eventType] == null || this._callbackDic[eventType] == undefined) {
                this._callbackDic[eventType] = [];
            }
            this._callbackDic[eventType].push(callback);
        };
        /**
         * 移除事件监听
         * @param eventType 事件类型
         * @param callback  回调函数
         */
        EventManage.prototype.removeList = function (eventType, callback) {
            var arr = this._callbackDic[eventType];
            if (arr != undefined && arr != null) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == callback) {
                        arr.splice(i, 1);
                        return;
                    }
                }
            }
        };
        /**
         * 事件广播接口
         * @param noticeType : 消息类型
         * @param data：暑假
         */
        EventManage.prototype.dispatcher = function (evnetType, data) {
            if (data === void 0) { data = null; }
            var nData = new mevent.NoticeData(evnetType, data);
            var arr = this._callbackDic[evnetType];
            if (arr != undefined && arr != null) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].call(null, nData);
                }
            }
        };
        EventManage.instance = function () {
            this._instance = this._instance == null ? new EventManage() : this._instance;
            return this._instance;
        };
        EventManage._instance = null;
        return EventManage;
    })();
    manage.EventManage = EventManage; //end export
})(manage || (manage = {})); //end manage
//# sourceMappingURL=EventManage.js.map