/**
 * Created by jgg on 2015/1/23.
 */
var manage;
(function (manage) {
    var DataModuleManage = (function () {
        function DataModuleManage() {
            this._dataDic = null;
        }
        DataModuleManage.prototype.start = function () {
            this._dataDic = {};
            this.addDataModule(config.DataModuleKey.M_DATA_MAP, new data.MapData());
        };
        /**
         * 添加data 模块到存储列表
         * @param dataKey
         * @param dataModule
         */
        DataModuleManage.prototype.addDataModule = function (dataKey, dataModule) {
            this._dataDic[dataKey] = dataModule;
        };
        DataModuleManage.prototype.getDataModule = function (dataKey) {
            return this._dataDic[dataKey];
        };
        DataModuleManage.prototype.removeData = function (dataKey) {
            if (this._dataDic[dataKey] != null || this._dataDic[dataKey] != undefined) {
                this._dataDic[dataKey].destroy();
                delete this._dataDic[dataKey];
            }
        };
        DataModuleManage.instance = function () {
            this._instance = this._instance == null ? new DataModuleManage() : this._instance;
            return this._instance;
        };
        DataModuleManage._instance = null;
        return DataModuleManage;
    })();
    manage.DataModuleManage = DataModuleManage;
    DataModuleManage.prototype.__class__ = "manage.DataModuleManage"; //end export
})(manage || (manage = {})); //end manage
