/**
 * Created by xushuwei on 15/1/28.
 */
module view.map{
    export class Block extends egret.Sprite{

        private _blockSkin:egret.Bitmap;
        private _blockInfo:data.BlockInfo;
        private _color:number = 0xcccccc;
        private _lineColor:number = 0xffffff;
        private _al:number  = 1;

        public constructor(row:number,col:number,block:number) {
            super();
            this._blockSkin = new egret.Bitmap();
            this._blockInfo = new data.BlockInfo(row, col, block);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }


        public getBlockInfo():data.BlockInfo{
            return this._blockInfo;
        }

        public setBlockInfo(value:data.BlockInfo):void{
            this._blockInfo = value;
        }

        public getColor():number{
            return this._color;
        }

        public setColor(value:number):void{
            this._color =value;
        }

        private onAddToStage():void{
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createChild();
            this.drawBackGround();
        }

        private createChild():void{

            if(this._blockInfo.getBlock() == 1){
                this.addChild(this._blockSkin);
                this._blockSkin.width = config.GameConfig.BLOCK_WIDTH;
                this._blockSkin.height = config.GameConfig.BLOCK_HIEGHT;
                this._blockSkin.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BLOCK_SKIN);
            }

            this.x = this._blockInfo.getCol() * config.GameConfig.BLOCK_WIDTH;
            this.y = this._blockInfo.getRow() * config.GameConfig.BLOCK_HIEGHT;
        }

        private drawBackGround():void{
            this.graphics.lineStyle(1,this._lineColor);
            this.graphics.beginFill(this._color, this._al);
            this.graphics.drawRect(0, 0, config.GameConfig.BLOCK_WIDTH, config.GameConfig.BLOCK_HIEGHT);
            this.graphics.endFill();
        }

        public destroy():void{

        }
    }
}