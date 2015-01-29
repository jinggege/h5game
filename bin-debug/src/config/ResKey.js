/**
 * Created by jgg on 2015/1/15.
 * 资源香港配置
 *
 */
var config;
(function (config) {
    var ResKey = (function () {
        function ResKey() {
        }
        /**背景图片*/
        ResKey.GAME_BG_NAME = "bgImage"; //full name  tetrie_bg.jpg
        /**控制条区域资源*/
        ResKey.BTN_LEFT = "btn_left";
        ResKey.BTN_RIGHT = "btn_right";
        ResKey.BTN_TURN = "btn_turn";
        ResKey.BTN_DOWN = "btn_down";
        ResKey.BTN_OK = "btn_ok";
        /**资源组  此值必须 与resource.json 中配置的名称相同  */
        ResKey.RES_GROUP_PROLOAD = "preload";
        return ResKey;
    })();
    config.ResKey = ResKey;
    ResKey.prototype.__class__ = "config.ResKey"; //END EXPORT
})(config || (config = {})); //end module
