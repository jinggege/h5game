/**
 * Created by jgg on 2015/1/15.
 * 加载管理器
 */
var manage;
(function (manage) {
    var LoadManage = (function () {
        function LoadManage() {
        }
        LoadManage.prototype.start = function () {
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configCompleteHandler, this);
            RES.loadConfig("resource/resource.json", "resource/");
        };
        LoadManage.prototype.configCompleteHandler = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.configCompleteHandler, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.loadGroupCompleteHandler, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.loadGroupProgressHandler, this);
            RES.loadGroup(config.ResKey.RES_GROUP_PROLOAD);
        };
        /**
         *加载完成
         * @param event
         */
        LoadManage.prototype.loadGroupCompleteHandler = function (event) {
            manage.EventManage.instance().dispatcher(mevent.EventType.N_LOAD_COMPLETE, event.groupName);
        };
        /**
         *加载进度
         * @param event
         */
        LoadManage.prototype.loadGroupProgressHandler = function (event) {
        };
        /**
         * @param resName
         * @returns {any}
         */
        LoadManage.prototype.getTextureByName = function (resName) {
            return RES.getRes(resName);
        };
        LoadManage.instance = function () {
            this._instance = this._instance == null ? new LoadManage() : this._instance;
            return this._instance;
        };
        return LoadManage;
    })();
    manage.LoadManage = LoadManage;
    LoadManage.prototype.__class__ = "manage.LoadManage"; //end export
})(manage || (manage = {})); //end module
