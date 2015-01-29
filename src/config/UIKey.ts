/**
 * Created by jgg on 2015/1/14.
 *
 * UIKEY  必须唯一
 *
 *
 */
module config
{
    export class UIKey
    {
        public static UI_LOADING:string = "ui_loading";
        public static UI_BG:string = "ui_bg";

        public static UI_CONTROL:string = "ui_control";
        /**map*/
        public static UI_MAP:string = "UI_MAP";





        /**=====================层级配置================================
         *层级示意图   采用文件夹结构管理
         *  root-
         *       level_1-
         *              level_1_1
         *              level_1_2
         *       level_2
         *              level_2_1
         *              level_2_2
         *                      level_2_2_1
         *                      level_2_2_2
         *       level3-
         *
         **************************************************************/

        /**层级 背景*/
        public static UI_LEVEL_1   :string = "1";
        /**层级 map*/
        public static UI_LEVEL_2  :string = "2";
        /**层级 game control*/
        public static UI_LEVEL_2_1:string = "2_1";
        /**层级 other*/
        public static UI_LEVEL_3 :string = "3";






    }//end export

}//end module