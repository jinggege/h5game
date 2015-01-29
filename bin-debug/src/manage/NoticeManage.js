/**
 * Created by jgg on 2015/1/22.
 * 消息配发中心
 */
var manage;
(function (manage) {
    var NoticeManage = (function () {
        function NoticeManage() {
            this._callbackDic = {};
        }
        /**
         * 注册事件监听
         * @param noticeType：消息类型
         * @param callback：回调函数
         */
        NoticeManage.prototype.addListener = function (noticeType, callback) {
            this._callbackDic[noticeType] = callback;
        };
        /**
         * 事件广播接口
         * @param noticeType : 消息类型
         * @param data：暑假
         */
        NoticeManage.prototype.notify = function (noticeType, data) {
            var nData = new notice.NoticeData(noticeType, data);
            if (this._callbackDic[noticeType] != undefined) {
                this._callbackDic[noticeType].call(null, nData);
            }
        };
        NoticeManage.instance = function () {
            this._instance = this._instance == null ? new NoticeManage() : this._instance;
            return this._instance;
        };
        NoticeManage._instance = null;
        return NoticeManage;
    })();
    manage.NoticeManage = NoticeManage;
    NoticeManage.prototype.__class__ = "manage.NoticeManage"; //end export
})(manage || (manage = {})); //end manage
