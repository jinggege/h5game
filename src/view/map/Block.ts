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

        public constructor(blockInfo:data.BlockInfo) {
            super();
            this._blockSkin = new egret.Bitmap();
            this._blockInfo = blockInfo;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        public getBlockInfo():data.BlockInfo{
            return this._blockInfo;
        }

        set block(value:number){
            this._blockInfo.setBlock(value);
            if(this._blockInfo.getBlock() == 1){
                this._blockSkin.visible = true;
            }else{
                this._blockSkin.visible = false;
            }
        }

        get block():number{
            return this._blockInfo.getBlock();
        }

        get row():number{
            return this._blockInfo.getRow();
        }

        get col():number{
            return this._blockInfo.getCol();
        }

        get color():number{
            return this._color;
        }

        set color(value:number){
            this._color = value;
        }

        private onAddToStage():void{
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.createChild();
            this.drawBackGround();
        }

        private createChild():void{
            this.addChild(this._blockSkin);
            this._blockSkin.width = config.GameConfig.BLOCK_WIDTH;
            this._blockSkin.height = config.GameConfig.BLOCK_HIEGHT;
            this._blockSkin.texture = manage.LoadManage.instance().getTextureByName(config.ResKey.BLOCK_SKIN);
            if(this._blockInfo.getBlock() == 1){
                this._blockSkin.visible = true;
            }else{
                this._blockSkin.visible = false;
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