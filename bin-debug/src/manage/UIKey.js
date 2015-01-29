/**
 * Created by jgg on 2015/1/14.
 *
 * UIKEY  必须唯一
 *
 *
 */
var manage;
(function (manage) {
    var UIKey = (function () {
        function UIKey() {
        }
        UIKey.UI_LOADING = "ui_loading";
        UIKey.UI_BG = "ui_bg";
        return UIKey;
    })();
    manage.UIKey = UIKey;
    UIKey.prototype.__class__ = "manage.UIKey"; //end export
})(manage || (manage = {})); //end module
