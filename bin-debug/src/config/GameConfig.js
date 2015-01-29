/**
 * Created by jgg on 2015/1/15.
 * 游戏数据相关配置
 */
var config;
(function (config) {
    var GameConfig = (function () {
        function GameConfig() {
        }
        /**舞台最小宽度*/
        GameConfig.STAGE_MAIN_WIDTH = 300;
        /**舞台最小高度*/
        GameConfig.STAGE_MAIN_HEIGHT = 500;
        return GameConfig;
    })();
    config.GameConfig = GameConfig;
    GameConfig.prototype.__class__ = "config.GameConfig"; //end export
})(config || (config = {})); //end module
