/**
 * Created by jgg on 2015/1/14.
 */
module util
{
    export class Console
    {

        public static isDebug:boolean = true;

        /**
         * 打印log
         * @param arr
         */
        public static log(arr:any[]):void{

            if(!this.isDebug) return;
            console.log(arr);

        }

    }//end export

}//end module