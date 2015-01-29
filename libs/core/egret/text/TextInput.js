/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    /**
     * @classdesc
     * TextInput 已废弃，请使用TextField代替，并设置type为TextFieldType.INPUT
     * @extends egret.TextField
     * @deprecated
     */
    var TextInput = (function (_super) {
        __extends(TextInput, _super);
        function TextInput() {
            _super.call(this);
            egret.Logger.warning("TextInput 已废弃，请使用TextField代替，并设置type为TextFieldType.INPUT");
            this.type = egret.TextFieldType.INPUT;
        }
        /**
         * 请使用TextField.text设置
         * @deprecated
         * @param value
         */
        TextInput.prototype.setText = function (value) {
            egret.Logger.warning("TextField.setText()已废弃，请使用TextInput.text设置");
            this.text = value;
        };
        /**
         * 请使用TextInput.text获取
         * @deprecated
         * @returns {string}
         */
        TextInput.prototype.getText = function () {
            egret.Logger.warning("TextField.getText()已废弃，请使用TextInput.text获取");
            return this.text;
        };
        /**
         * 请使用TextInput.displayAsPassword设置
         * @deprecated
         * @param value
         */
        TextInput.prototype.setTextType = function (type) {
            egret.Logger.warning("TextField.setTextType()已废弃，请使用TextInput.displayAsPassword设置");
            this.displayAsPassword = type == "password";
        };
        /**
         * 请使用TextInput.displayAsPassword获取
         * @deprecated
         * @returns {string}
         */
        TextInput.prototype.getTextType = function () {
            egret.Logger.warning("TextField.getTextType()已废弃，请使用TextInput.displayAsPassword获取");
            return this.displayAsPassword ? "password" : "text";
        };
        return TextInput;
    })(egret.TextField);
    egret.TextInput = TextInput;
    TextInput.prototype.__class__ = "egret.TextInput";
})(egret || (egret = {}));
