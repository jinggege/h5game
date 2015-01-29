/**
 * Created by jgg on 2015/1/15.
 * 游戏数据相关配置
 */
module config
{
    export class GameConfig{

        /**舞台最小宽度*/
        public static STAGE_MAIN_WIDTH:number  = 300;
        /**舞台最小高度*/
        public static STAGE_MAIN_HEIGHT:number = 500;

        /**地图配置*/
        /**最大行数*/
        public static MAP_MAX_ROW:number = 15;
        /**最大列数*/
        public static MAP_MAX_COL:number = 10;

        public static BLOCK_WIDTH:number  =30;
        public static BLOCK_HIEGHT:number = 30;




        /**direction config*/
        public static DIR_LEFT:String = "DIR_LEFT";
        public static DIR_RIGT:String = "DIR_RIGT";

        public static DIR_DOWN:string = "DIR_DOWN";
        public static DIR_TURN:string = "DIR_TURN";

    }//end export

}//end module