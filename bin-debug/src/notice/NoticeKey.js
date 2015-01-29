/**
 * Created by jgg on 2015/1/22.
 */
var notice;
(function (notice) {
    var NoticeKey = (function () {
        function NoticeKey() {
        }
        /**消息:stage 尺寸发生变化*/
        NoticeKey.N_STAGE_RESIZE = "N_STAGE_RESIZE";
        /**消息:stage 打开UI*/
        NoticeKey.N_OPEN_UI = "N_OPEN_UI";
        /**消息:stage 关闭UI*/
        NoticeKey.N_CLOSE_UI = "N_CLOSE_UI";
        /**加载完成*/
        NoticeKey.N_LOAD_COMPLETE = "N_LOAD_COMPLETE";
        return NoticeKey;
    })();
    notice.NoticeKey = NoticeKey;
    NoticeKey.prototype.__class__ = "notice.NoticeKey"; //end export
})(notice || (notice = {})); //end module
