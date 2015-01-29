/**
 * Created by jgg on 2015/1/22.
 *
 */
var mevent;
(function (mevent) {
    var NoticeData = (function () {
        /**
         *
         * @param type  消息类型
         * @param data 消息具体数据
         */
        function NoticeData(type, data) {
            this._noticeType = type;
            this._data = data;
        }
        Object.defineProperty(NoticeData.prototype, "type", {
            /**
             *事件类型
             * @returns {notice type}
             */
            get: function () {
                return this._noticeType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NoticeData.prototype, "data", {
            /**
             *数据
             * @returns {notice data}
             */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        return NoticeData;
    })();
    mevent.NoticeData = NoticeData;
    NoticeData.prototype.__class__ = "mevent.NoticeData"; //end class
})(mevent || (mevent = {})); //end module
