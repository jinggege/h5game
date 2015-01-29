/**
 * Created by jgg on 2015/1/22.
 */
var notice;
(function (notice) {
    var EventType = (function () {
        function EventType() {
        }
        /**消息:stage 尺寸发生变化*/
        EventType.N_STAGE_RESIZE = "N_STAGE_RESIZE";
        /**消息:stage 打开UI*/
        EventType.N_OPEN_UI = "N_OPEN_UI";
        /**消息:stage 关闭UI*/
        EventType.N_CLOSE_UI = "N_CLOSE_UI";
        /**加载完成*/
        EventType.N_LOAD_COMPLETE = "N_LOAD_COMPLETE";
        return EventType;
    })();
    notice.EventType = EventType;
    EventType.prototype.__class__ = "notice.EventType"; //end export
})(notice || (notice = {})); //end module
