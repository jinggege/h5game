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
        /**地图配置*/
        /**最大行数*/
        GameConfig.MAP_MAX_ROW = 15;
        /**最大列数*/
        GameConfig.MAP_MAX_COL = 10;
        GameConfig.BLOCK_WIDTH = 30;
        GameConfig.BLOCK_HIEGHT = 30;
        /**direction config*/
        GameConfig.DIR_LEFT = "DIR_LEFT";
        GameConfig.DIR_RIGT = "DIR_RIGT";
        GameConfig.DIR_DOWN = "DIR_DOWN";
        GameConfig.DIR_TURN = "DIR_TURN";
        return GameConfig;
    })();
    config.GameConfig = GameConfig;
    GameConfig.prototype.__class__ = "config.GameConfig"; //end export
})(config || (config = {})); //end module
