/**
 * Created by jgg on 2015/1/14.
 */
var util;
(function (util) {
    var Console = (function () {
        function Console() {
        }
        /**
         * 打印log
         * @param arr
         */
        Console.log = function (arr) {
            if (!this.isDebug)
                return;
            console.log(arr);
        };
        Console.isDebug = true;
        return Console;
    })();
    util.Console = Console; //end export
})(util || (util = {})); //end module
//# sourceMappingURL=Util.js.map