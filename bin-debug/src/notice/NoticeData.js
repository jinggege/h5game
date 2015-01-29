/**
 * Created by jgg on 2015/1/22.
 *
 */
var notice;
(function (notice) {
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
             *
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
             *
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
    notice.NoticeData = NoticeData;
    NoticeData.prototype.__class__ = "notice.NoticeData"; //end class
})(notice || (notice = {})); //end module
