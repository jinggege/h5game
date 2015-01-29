/**
 * Created by jgg on 2015/1/14.
 *
 * UIKEY  必须唯一
 *
 *
 */
var config;
(function (config) {
    var UIKey = (function () {
        function UIKey() {
        }
        UIKey.UI_LOADING = "ui_loading";
        UIKey.UI_BG = "ui_bg";
        UIKey.UI_CONTROL = "ui_control";
        /**=====================层级配置================================*/
        /**层级 背景*/
        UIKey.UI_LEVEL_1 = "1";
        /**层级 map*/
        UIKey.UI_LEVEL_2 = "2";
        /**层级 game control*/
        UIKey.UI_LEVEL_2_1 = "2_1";
        /**层级 other*/
        UIKey.UI_LEVEL_3 = "3";
        return UIKey;
    })();
    config.UIKey = UIKey;
    UIKey.prototype.__class__ = "config.UIKey"; //end export
})(config || (config = {})); //end module
