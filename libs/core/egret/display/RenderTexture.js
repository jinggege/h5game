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
     * @class egret.RenderTexture
     * @classdesc
     * RenderTexture 是动态纹理类，他实现了将显示对象及其子对象绘制成为一个纹理的功能
     * @extends egret.Texture
     */
    var RenderTexture = (function (_super) {
        __extends(RenderTexture, _super);
        function RenderTexture() {
            _super.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = egret.RendererContext.createRendererContext(this._bitmapData);
        }
        /**
         * 将制定显示对象绘制为一个纹理
         * @method egret.RenderTexture#drawToTexture
         * @param displayObject {egret.DisplayObject}
         */
        RenderTexture.prototype.drawToTexture = function (displayObject) {
            var cacheCanvas = this._bitmapData;
            var bounds = displayObject.getBounds(egret.Rectangle.identity);
            if (bounds.width == 0 || bounds.height == 0) {
                egret.Logger.warning("egret.RenderTexture#drawToTexture:显示对象测量结果宽高为0，请检查");
                return false;
            }
            bounds.width = Math.floor(bounds.width);
            bounds.height = Math.floor(bounds.height);
            cacheCanvas.width = bounds.width;
            cacheCanvas.height = bounds.height;
            if (this.renderContext._cacheCanvas) {
                this.renderContext._cacheCanvas.width = bounds.width;
                this.renderContext._cacheCanvas.height = bounds.height;
            }
            RenderTexture.identityRectangle.width = bounds.width;
            RenderTexture.identityRectangle.height = bounds.height;
            displayObject._worldTransform.identity();
            displayObject.worldAlpha = 1;
            if (displayObject instanceof egret.DisplayObjectContainer) {
                var anchorOffsetX = displayObject._anchorOffsetX;
                var anchorOffsetY = displayObject._anchorOffsetY;
                if (displayObject._anchorX != 0 || displayObject._anchorY != 0) {
                    anchorOffsetX = displayObject._anchorX * bounds.width;
                    anchorOffsetY = displayObject._anchorY * bounds.height;
                }
                this._offsetX = bounds.x + anchorOffsetX;
                this._offsetY = bounds.y + anchorOffsetY;
                displayObject._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                var list = displayObject._children;
                for (var i = 0, length = list.length; i < length; i++) {
                    var child = list[i];
                    child._updateTransform();
                }
            }
            var renderFilter = egret.RenderFilter.getInstance();
            var drawAreaList = renderFilter._drawAreaList.concat();
            renderFilter._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            this.webGLTexture = null; //gl.deleteTexture(this.webGLTexture);
            var mask = displayObject.mask || displayObject._scrollRect;
            if (mask) {
                this.renderContext.pushMask(mask);
            }
            displayObject._render(this.renderContext);
            if (mask) {
                this.renderContext.popMask();
            }
            renderFilter.addDrawArea(RenderTexture.identityRectangle);
            this.renderContext.onRenderFinish();
            renderFilter._drawAreaList = drawAreaList;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight;
            return true;
            //测试代码
            //            this.renderContext.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            //            this.renderContext.strokeRect(0, 0,cacheCanvas.width,cacheCanvas.height,"#ff0000");
            //            document.documentElement.appendChild(cacheCanvas);
        };
        RenderTexture.identityRectangle = new egret.Rectangle();
        return RenderTexture;
    })(egret.Texture);
    egret.RenderTexture = RenderTexture;
    RenderTexture.prototype.__class__ = "egret.RenderTexture";
})(egret || (egret = {}));
