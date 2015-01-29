/**
 * Created by jgg on 2015/1/14.
 */
module i
{
    export interface IUIControl
    {
        init():void;
        open():void;
        getLevel():string;
        close():void;
        destroy():void;

    }//end export

}//end module